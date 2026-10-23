"""Edit captured browser screencast frames; never simulate product responses.

The private manifest binds CDP frame streams, trims, speed, privacy masks and
editorial captions. Raw frames and internal identifiers stay outside the repo.
"""
import argparse, bisect, hashlib, json, pathlib, subprocess
from PIL import Image, ImageDraw, ImageFont, ImageOps

p=argparse.ArgumentParser()
p.add_argument('--manifest',type=pathlib.Path,required=True)
p.add_argument('--output',type=pathlib.Path,required=True)
p.add_argument('--ffmpeg',type=pathlib.Path,required=True)
p.add_argument('--preview',action='store_true')
a=p.parse_args()
m=json.loads(a.manifest.read_text(encoding='utf-8-sig'))
a.output.mkdir(parents=True,exist_ok=True)
W,H,FPS=1920,1080,24
BG='#090D16';INK='#F4F5FA';MUTED='#A6AEC0';ACCENT='#B49BFF'
FONTS={}
def font(size,bold=False):
    key=(size,bold)
    if key not in FONTS:FONTS[key]=ImageFont.truetype('C:/Windows/Fonts/'+('malgunbd.ttf' if bold else 'malgun.ttf'),size)
    return FONTS[key]
def txt(d,xy,s,size=24,fill=INK,bold=False):d.text(xy,s,font=font(size,bold),fill=fill)
def stamp(t):
    ms=round(t*1000)
    return f'{ms//3600000:02}:{ms//60000%60:02}:{ms//1000%60:02}.{ms%1000:03}'

proof=[];loaded=[];total=0;vtt=['WEBVTT',''];transcript=['# 하루 실제 동작 시연','',m['disclosure'],'']
for n,s in enumerate(m['scenes']):
    packet=json.loads((a.manifest.parent/s['clip']).read_text(encoding='utf-8'))
    assert not packet['errors'],packet['errors']
    frames=packet['frames'];assert frames
    first=frames[0]['timestamp']; times=[f['timestamp']-first for f in frames]
    assert times==sorted(times)
    s['_actions']=[dict(action,t=action['at']/1000-first) for action in packet.get('actions',[])]
    loaded.append((s,frames,times))
    proof.append({'clip':s['clip'],'clip_sha256':hashlib.sha256((a.manifest.parent/s['clip']).read_bytes()).hexdigest(),'captured_frames':len(frames),'unique_frame_hashes':len({hashlib.sha256((a.manifest.parent/'raw'/f['file']).read_bytes()).hexdigest() for f in frames}),'crop':s['crop'],'redactions':s.get('redactions',[]),'duration':s['seconds']})
    vtt.extend([str(n+1),f'{stamp(total)} --> {stamp(total+s["seconds"])}',s['caption'],''])
    transcript.extend([f'## {int(total)//60:02}:{int(total)%60:02} · {s["title"]}','',s['caption'],''])
    total+=s['seconds']

def compose(scene,frames,times,local_t,global_t):
    source_t=max(0,local_t-scene.get('head_hold',0))*scene.get('speed',1)+scene.get('source_start',0)
    index=max(0,min(len(frames)-1,bisect.bisect_right(times,source_t)-1))
    path=a.manifest.parent/'raw'/frames[index]['file']
    with Image.open(path) as f:shot=f.convert('RGB')
    metadata=frames[index]['metadata']
    # CDP device coordinates are CSS pixels; JPEG dimensions include device scale.
    sx=shot.width/metadata['deviceWidth'];sy=shot.height/metadata['deviceHeight']
    def pixels(box):return tuple(round(value*(sx if i%2==0 else sy)) for i,value in enumerate(box))
    sd=ImageDraw.Draw(shot)
    for rule in scene.get('redactions',[]):
        box=rule['box'] if isinstance(rule,dict) else rule
        rect=pixels(box)
        if isinstance(rule,dict) and rule.get('when_background_dark'):
            # The newly sent mention briefly renders its private app URI.
            # Apply the mask only while the dark user-message bubble is here.
            shade=ImageOps.grayscale(shot.crop(rect)).resize((1,1)).getpixel((0,0))
            if shade>=225:continue
        sd.rectangle(rect,fill='#E5E7EB')
        txt(sd,(rect[0]+5,rect[1]+1),'식별자 비공개',round(12*sx),'#5B6475')
    shot=shot.crop(pixels(scene['crop']))
    im=Image.new('RGB',(W,H),BG);d=ImageDraw.Draw(im)
    txt(d,(64,25),'하루',31,bold=True)
    txt(d,(145,34),'WORK MEMORY',15,MUTED)
    txt(d,(1305,34),'실제 MCP 동작 · 대기 구간 편집',19,MUTED)
    d.line((64,82,1856,82),fill='#263044',width=1)
    steps=['작업 저장','회상','후속 질문','인수인계 확인']
    for i,label in enumerate(steps):
        x=66+i*456;active=i==scene['stage']
        txt(d,(x,99),f'0{i+1}',17,ACCENT if active else '#687386',True)
        txt(d,(x+39,94),label,23,INK if active else '#828EA2',active)
        if active:d.line((x,139,x+351,139),fill=ACCENT,width=3)
    view=ImageOps.contain(shot,(1792,760),Image.Resampling.LANCZOS)
    x=(W-view.width)//2;y=163+(760-view.height)//2
    d.rounded_rectangle((x-1,y-1,x+view.width+1,y+view.height+1),radius=5,fill='#D8DDE8')
    im.paste(view,(x,y));d=ImageDraw.Draw(im)
    # Editorial pointer highlight is bound to the logged real click coordinates.
    active=[action for action in scene['_actions'] if action['t']<=source_t]
    if active:
        action=active[-1];crop=pixels(scene['crop'])
        px=x+(action['x']*sx-crop[0])*view.width/shot.width
        py=y+(action['y']*sy-crop[1])*view.height/shot.height
        if x<=px<=x+view.width and y<=py<=y+view.height:
            age=source_t-action['t']
            if age<.6:
                radius=9+28*max(0,age)/.6
                d.ellipse((px-radius,py-radius,px+radius,py+radius),outline=ACCENT,width=3)
            polygon=[(px,py),(px,py+24),(px+6,py+18),(px+13,py+30),(px+18,py+27),(px+12,py+16),(px+25,py+16)]
            d.polygon(polygon,fill='#FFFFFF',outline='#27324B',width=2)
    txt(d,(64,950),scene['title'],27,INK,True)
    txt(d,(64,996),scene['caption'],23,MUTED)
    d.rectangle((0,1076,int(W*global_t/total),1079),fill=ACCENT)
    return im

elapsed=0;frame_count=0;contact=[]
if not a.preview:
    command=[str(a.ffmpeg),'-y','-v','error','-f','rawvideo','-pixel_format','rgb24','-video_size',f'{W}x{H}','-framerate',str(FPS),'-i','pipe:0','-an','-c:v','libx264','-preset','fast','-crf','21','-threads','2','-pix_fmt','yuv420p','-map_metadata','-1','-movflags','+faststart',str(a.output/'haru-workflow-motion.mp4')]
    encoder=subprocess.Popen(command,stdin=subprocess.PIPE)
for scene,frames,times in loaded:
    samples={0,int(scene['seconds']*FPS/2),max(0,int(scene['seconds']*FPS)-1)}
    for frame in range(round(scene['seconds']*FPS)):
        if a.preview and frame not in samples:continue
        im=compose(scene,frames,times,frame/FPS,elapsed+frame/FPS)
        if frame in samples:
            dest=a.output/f'qa-{len(contact):02}.jpg'
            im.save(dest,quality=91);contact.append(dest)
        if not a.preview:encoder.stdin.write(im.tobytes())
        frame_count+=1
    elapsed+=scene['seconds']
if not a.preview:
    encoder.stdin.close()
    assert encoder.wait()==0
    (a.output/'haru-workflow-motion.ko.vtt').write_text('\n'.join(vtt),encoding='utf-8')
    (a.output/'transcript.md').write_text('\n'.join(transcript).rstrip()+'\n',encoding='utf-8')
proof_doc={'schema':'haru.motion-edit.v1','seconds':total,'fps':FPS,'dimensions':[W,H],'rendered_frames':frame_count,'scenes':proof}
(a.output/'render-proof.json').write_text(json.dumps(proof_doc,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'seconds':total,'frames':frame_count,'scenes':len(loaded),'preview':a.preview},ensure_ascii=False))
