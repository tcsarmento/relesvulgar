import { BandData, BandMember, Show, GalleryPhoto, Event, SocialLink } from "./types";

// ============================================================
// GERADOR DE HTML — monta a página a partir dos dados
// ============================================================

function memberCard(m: BandMember, index: number): string {
  const photoHtml = m.photo
    ? `<img src="/images/members/${m.photo}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />`
    : "";
  return `
    <div class="member-card">
      <div class="member-num">0${index + 1} / 04</div>
      <div class="member-avatar">
        ${photoHtml}
        ${!m.photo ? m.initials : ""}
      </div>
      <div class="member-name">${m.name}</div>
      <div class="member-role">${m.role}</div>
      <div class="member-bio">${m.bio}</div>
      <div class="member-gear">${m.gear}</div>
    </div>`;
}

function showRow(s: Show): string {
  return `
    <a href="${s.ticketsUrl || "#"}" class="show-item">
      <div class="show-date"><strong>${s.dayLabel}</strong>${s.year}</div>
      <div>
        <div class="show-city">${s.city}</div>
        <div class="show-venue">${s.venue} · Abertura: ${s.time}</div>
      </div>
      <div class="show-tickets">Ingressos →</div>
    </a>`;
}

const gallerySpans = [
  "grid-column:span 5;grid-row:span 2;min-height:280px;",
  "grid-column:span 4;min-height:135px;",
  "grid-column:span 3;min-height:135px;",
  "grid-column:span 4;min-height:135px;",
  "grid-column:span 3;min-height:135px;",
  "grid-column:span 4;min-height:180px;",
  "grid-column:span 4;min-height:180px;",
  "grid-column:span 4;min-height:180px;",
];

const galleryBgs = ["gi-1","gi-2","gi-3","gi-4","gi-5","gi-6","gi-7","gi-8"];

function galleryItem(p: GalleryPhoto, index: number): string {
  const span = gallerySpans[index] ?? "grid-column:span 4;min-height:160px;";
  const bg = galleryBgs[index] ?? "gi-1";
  const hasPhoto = true; // always show bg class; replace with real img when available
  return `
    <div class="gallery-item" style="${span}">
      <div class="gallery-item-inner ${bg}" style="position:absolute;inset:0;">
        <img src="/images/gallery/${p.src}" alt="${p.label}"
          style="width:100%;height:100%;object-fit:cover;opacity:0;"
          onload="this.style.opacity='1'"
          onerror="this.style.display='none'" />
      </div>
      <div class="gallery-placeholder">
        <div class="gallery-placeholder-text">${p.category.toUpperCase()}</div>
      </div>
      <div class="gallery-label">${p.label}</div>
    </div>`;
}

const statusMap: Record<string, string> = {
  upcoming: '<span class="evento-status status-upcoming">Em breve</span>',
  soldout:  '<span class="evento-status status-soldout">Esgotado</span>',
  free:     '<span class="evento-status status-free">Entrada Livre</span>',
};

function eventCard(e: Event): string {
  return `
    <div class="evento-card">
      ${statusMap[e.status] ?? ""}
      <div class="evento-date-big">${e.dayNumber}</div>
      <div class="evento-title">${e.title}</div>
      <div class="evento-info">
        ${e.date}<br>${e.location}<br>${e.address}<br><br>${e.description}
      </div>
      ${e.link ? `<a href="${e.link}" class="evento-link">${e.linkLabel ?? "Saiba Mais"}</a>` : ""}
    </div>`;
}

function socialLink(s: SocialLink): string {
  return `
    <a href="${s.url}" target="_blank" rel="noopener" class="rede-link">
      <div class="rede-icon">${s.icon}</div>
      <div class="rede-name">${s.name}</div>
      <div class="rede-handle">${s.handle}</div>
      <div class="rede-arrow">↗</div>
    </a>`;
}

function timelineItem(item: { year: string; text: string }): string {
  return `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-text">${item.text}</div>
    </div>`;
}

// ============================================================
// TEMPLATE PRINCIPAL
// ============================================================
export function buildHtml(d: BandData): string {
  const { band, members, shows, gallery, events, socials, timeline } = d;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${band.name} — Official</title>
<meta name="description" content="${band.tagline} ${band.genre} — ${band.city}, ${band.state}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Special+Elite&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css">
</head>
<body>

<nav>
  <a href="#hero" class="nav-logo">${band.name}</a>
  <ul class="nav-links">
    <li><a href="#historia">História</a></li>
    <li><a href="#integrantes">Integrantes</a></li>
    <li><a href="#shows">Shows</a></li>
    <li><a href="#galeria">Galeria</a></li>
    <li><a href="#eventos">Eventos</a></li>
    <li><a href="#redes">Contato</a></li>
  </ul>
  <button class="nav-hamburger" aria-label="Menu" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
</nav>

<div id="hero">
  <div class="hero-bg-text" aria-hidden="true">RELESVULGAR</div>
  <div class="fade-in">
    <div class="hero-tag">${band.genre} — ${band.city}, ${band.state} · Est. ${band.founded}</div>
  </div>
  <h1 class="hero-title fade-in">${band.name.split(" ").map((w, i) => i === 0 ? w : `<span>${w}</span>`).join("\n")}</h1>
  <p class="hero-sub fade-in">${band.tagline}<br>Quatro pessoas, um barulho só.<br>Feedback como linguagem, ruído como poesia.</p>
  <div class="hero-cta fade-in">
    <a href="#shows" class="btn-primary">Ver Shows</a>
    <a href="#historia" class="btn-outline">Nossa História</a>
  </div>
  <div class="hero-scroll" aria-hidden="true">scroll</div>
</div>

<div class="ticker-wrapper" aria-hidden="true">
  <div class="ticker-track">
    ${Array(2).fill(
      `<span>${band.name}</span><span>★</span><span>${band.genre}</span><span>★</span><span>${band.city.toUpperCase()} DO PARÁ</span><span>★</span><span>DISTORÇÃO COMO ARTE</span><span>★</span><span>ESTAMOS GRAVANDO</span><span>★</span><span>${band.founded} — PRESENTE</span><span>★</span>`
    ).join("")}
  </div>
</div>

<section id="historia">
  <div>
    <div class="section-label">001 — Origem</div>
    <h2 class="section-title">Nossa<br>História</h2>
    <div class="historia-content">
      ${band.description.map(p => `<p>${p}</p>`).join("\n      ")}
    </div>
  </div>
  <div class="historia-timeline">
    ${timeline.map(timelineItem).join("")}
  </div>
</section>

<hr class="divider">

<div id="integrantes" class="section-full">
  <div class="section-inner" style="margin-bottom:2rem;">
    <div class="section-label">002 — Banda</div>
    <h2 class="section-title">Integrantes</h2>
  </div>
  <div class="members-grid">
    ${members.map(memberCard).join("")}
  </div>
</div>

<div id="shows" class="shows-wrapper">
  <section>
    <div class="section-label">003 — Agenda</div>
    <h2 class="section-title">Próximos Shows</h2>
    <div class="shows-list">
      ${shows.map(showRow).join("")}
    </div>
  </section>
</div>

<div id="galeria" class="section-full galeria-wrapper">
  <div class="section-inner" style="margin-bottom:2rem;">
    <div class="section-label">004 — Registro</div>
    <h2 class="section-title">Galeria</h2>
  </div>
  <div style="padding:0 2rem;">
    <div class="gallery-grid">
      ${gallery.map(galleryItem).join("")}
    </div>
  </div>
</div>

<div id="eventos" class="eventos-wrapper">
  <section>
    <div class="section-label">005 — Agenda Completa</div>
    <h2 class="section-title">Eventos</h2>
    <div class="eventos-grid">
      ${events.map(eventCard).join("")}
    </div>
  </section>
</div>

<div id="redes" class="redes-wrapper">
  <div class="section-inner" style="margin-bottom:2rem;">
    <div class="section-label">006 — Contato</div>
    <h2 class="section-title">Redes Sociais</h2>
  </div>
  <div style="padding:0 2rem;">
    <div class="redes-grid">
      ${socials.map(socialLink).join("")}
    </div>
  </div>
</div>

<footer>
  <div class="footer-logo">${band.name}</div>
  <div class="footer-copy">
    © ${new Date().getFullYear()} ${band.name} · ${band.city}, ${band.state}, Brasil<br>
    ${band.genre}
  </div>
</footer>

<script src="/js/main.js"></script>
</body>
</html>`;
}
