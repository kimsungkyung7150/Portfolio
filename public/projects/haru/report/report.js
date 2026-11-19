document.getElementById("print-document").addEventListener("click", () => window.print());

for (const link of document.querySelectorAll("a.inline-source")) {
  link.addEventListener("click", () => {
    const source = document.getElementById(link.hash.slice(1));
    if (source instanceof HTMLDetailsElement) source.open = true;
  });
}

const tocLinks = document.querySelectorAll(".toc a");
const sections = Array.from(document.querySelectorAll(".section"));
let queued = false;

function syncActiveSection() {
  queued = false;
  const cutoff = Math.max(80, window.innerHeight * 0.22);
  const current = sections.filter((section) => section.getBoundingClientRect().top <= cutoff).at(-1) ?? sections[0];

  for (const link of tocLinks) {
    if (link.hash === `#${current.id}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

function scheduleSectionSync() {
  if (queued) return;
  queued = true;
  window.requestAnimationFrame(syncActiveSection);
}

window.addEventListener("scroll", scheduleSectionSync, { passive: true });
window.addEventListener("resize", scheduleSectionSync);
syncActiveSection();
