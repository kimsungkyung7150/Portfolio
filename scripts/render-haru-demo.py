"""Render an edited demo from real, privately retained browser captures.

No browser automation or generated product responses. Crops/redactions are
declared in the private scene manifest; captions are editorial narration.
"""
import argparse, hashlib, json, pathlib, subprocess
from PIL import Image, ImageDraw, ImageFont, ImageOps
import imageio_ffmpeg

parser=argparse.ArgumentParser()
parser.add_argument('--manifest', required=True, type=pathlib.Path)
parser.add_argument('--output', required=True, type=pathlib.Path)
parser.add_argument('--work', required=True, type=pathlib.Path)
parser.add_argument('--frames-only', action='store_true')
args=parser.parse_args()
manifest=json.loads(args.manifest.read_text(encoding='utf-8-sig'))
args.output.mkdir(parents=True,exist_ok=True)
args.work.mkdir(parents=True,exist_ok=True)
W,H=1920,1080
BG='#080B12';SURFACE='#121827';BORDER='#263248';WHITE='#F8FAFC';MUTED='#A7B0C0';PURPLE='#A78BFA'
def font(size,bold=False):
    return ImageFont.truetype('C:/Windows/Fonts/'+('malgunbd.ttf' if bold else 'malgun.ttf'),size)
def wrap(draw,text,f,width):
    lines=[]
    for paragraph in text.split('\n'):
        line=''
        for word in paragraph.split(' '):
            candidate=(line+' '+word).strip()
            if draw.textlength(candidate,font=f)>width and line:
                lines.append(line);line=word
            else:line=candidate
        lines.append(line)
    return lines
def text(draw,xy,content,size=28,color=WHITE,width=1600,bold=False,line_gap=12):
    x,y=xy;f=font(size,bold)
    for line in wrap(draw,content,f,width):
        draw.text((x,y),line,font=f,fill=color);y+=size+line_gap
    return y
def base(scene,number,total):
    im=Image.new('RGB',(W,H),BG);d=ImageDraw.Draw(im)
    d.rectangle((0,0,W,5),fill=PURPLE)
    text(d,(70,38),'하루  /  MEMORY OS',28,bold=True)
    text(d,(1260,43),'실제 실행 화면 · 대기 구간 생략',22,MUTED,width=590)
    steps=['01  작업 저장','02  원문 회상','03  후속 질문','04  인수인계']
    for i,label in enumerate(steps):
        x=70+i*452;active=i==scene.get('stage',-1)
        d.rounded_rectangle((x,111,x+424,165),radius=12,fill='#25203D' if active else SURFACE,outline=PURPLE if active else BORDER,width=1)
        text(d,(x+22,119),label,23,PURPLE if active else MUTED,bold=active)
    d.line((70,944,1850,944),fill=BORDER,width=2)
    text(d,(70,968),scene['caption'],27,WHITE,width=1660,line_gap=9)
    text(d,(1775,1000),f'{number:02}/{total:02}',19,MUTED,width=90)
    return im

proof=[];paths=[];elapsed=0;vtt=['WEBVTT',''];transcript=['# 하루 실제 사용 데모','',
    '2026-10-24에 실행한 ChatGPT·Memory OS MCP 화면을 편집한 영상입니다. 연속 무편집 녹화가 아니며, 대기 구간을 생략하고 설명 자막을 추가했습니다. 화면의 답변·저장 상태를 조작하지 않았습니다. 개인정보·내부 식별자는 잘라내거나 불투명하게 가렸습니다.','',
    '음성 없이 한국어 화면 자막으로 볼 수 있습니다. 특정 업무 한 건의 동작 사례이며 전체 품질·회사 운영 완료나 실시간 응답 속도를 입증하지 않습니다.','']
def timestamp(seconds):
    ms=round(seconds*1000);return f'{ms//3600000:02}:{ms//60000%60:02}:{ms//1000%60:02}.{ms%1000:03}'
for idx,s in enumerate(manifest['scenes'],1):
    im=base(s,idx,len(manifest['scenes']));d=ImageDraw.Draw(im)
    if 'capture' in s:
        src=args.manifest.parent/'captures'/s['capture'];raw=src.read_bytes();shot=Image.open(src).convert('RGB')
        sd=ImageDraw.Draw(shot)
        for box in s.get('redactions',[]):
            sd.rounded_rectangle(tuple(box),radius=4,fill='#182033')
            sd.text((box[0]+6,box[1]+2),'식별자 비공개',font=font(12),fill='#CBD5E1')
        shot=shot.crop(tuple(s['crop']))
        fitted=ImageOps.contain(shot,(1160,686),Image.Resampling.LANCZOS)
        x=70+(1160-fitted.width)//2;y=220+(686-fitted.height)//2
        d.rounded_rectangle((65,201,1235,916),radius=20,fill=SURFACE,outline=BORDER,width=2)
        im.paste(fitted,(x,y));d=ImageDraw.Draw(im)
        text(d,(1285,220),s['eyebrow'],23,PURPLE,width=560,bold=True)
        y=text(d,(1285,270),s['title'],49,width=550,bold=True,line_gap=17)+32
        for bullet in s['bullets']:
            d.ellipse((1287,y+16,1294,y+23),fill=PURPLE)
            y=text(d,(1310,y),bullet,28,MUTED,width=500,line_gap=12)+28
        proof.append({'capture':s['capture'],'sha256':hashlib.sha256(raw).hexdigest(),'crop':s['crop'],'redactions':s.get('redactions',[])})
    else:
        text(d,(100,247),s['eyebrow'],26,PURPLE,bold=True)
        y=text(d,(100,312),s['title'],79,WHITE,width=1710,bold=True,line_gap=25)+42
        for bullet in s['bullets']:
            y=text(d,(105,y),bullet,34,MUTED,width=1640,line_gap=16)+22
    p=args.work/f'scene-{idx:02}.png';im.save(p);paths.append(p)
    vtt += [str(idx),f"{timestamp(elapsed)} --> {timestamp(elapsed+s['seconds'])}",s['caption'],'']
    transcript += [f"## {int(elapsed)//60:02}:{int(elapsed)%60:02} · {s['title'].replace(chr(10),' ')}",'',s['caption'],'']
    elapsed+=s['seconds']
poster=Image.open(paths[0]).convert('RGB');poster.save(args.output/'haru-demo-poster.jpg',quality=90)
(args.output/'haru-workflow.ko.vtt').write_text('\n'.join(vtt),encoding='utf8')
(args.output/'transcript.md').write_text('\n'.join(transcript),encoding='utf8')
(args.work/'capture-proof.json').write_text(json.dumps({'duration_seconds':elapsed,'sources':proof},ensure_ascii=False,indent=2),encoding='utf8')
if args.frames_only:
    print(json.dumps({'frames':len(paths),'duration_seconds':elapsed}));raise SystemExit(0)
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe();segments=[]
for i,(s,p) in enumerate(zip(manifest['scenes'],paths),1):
    target=args.work/f'segment-{i:02}.mp4';duration=s['seconds']
    cmd=[ffmpeg,'-y','-loglevel','error','-loop','1','-i',str(p),'-t',str(duration),'-vf',f'fps=24,fade=t=in:st=0:d=0.2,fade=t=out:st={duration-0.2}:d=0.2','-c:v','libx264','-preset','fast','-tune','stillimage','-crf','22','-threads','2','-pix_fmt','yuv420p','-an','-map_metadata','-1',str(target)]
    subprocess.run(cmd,check=True);segments.append(target)
concat=args.work/'concat.txt';concat.write_text('\n'.join("file '"+p.as_posix()+"'" for p in segments),encoding='utf8')
out=args.output/'haru-workflow.mp4'
subprocess.run([ffmpeg,'-y','-loglevel','error','-f','concat','-safe','0','-i',str(concat),'-c','copy','-map_metadata','-1','-movflags','+faststart',str(out)],check=True)
print(json.dumps({'duration_seconds':elapsed,'bytes':out.stat().st_size,'sha256':hashlib.sha256(out.read_bytes()).hexdigest()}))
