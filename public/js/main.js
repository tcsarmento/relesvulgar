// ============================================================
// STATIC VOID — Scripts do cliente
// ============================================================

// Fade-in ao scrollar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".member-card, .evento-card, .show-item, .rede-link").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(15px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Glitch no logo ao hover
const logo = document.querySelector(".nav-logo");
if (logo) {
  logo.addEventListener("mouseenter", () => {
    logo.style.letterSpacing = Math.random() > 0.5 ? "0.3em" : "0.1em";
    setTimeout(() => { logo.style.letterSpacing = "0.2em"; }, 150);
  });
}

// Lightbox para galeria
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const label = item.querySelector(".gallery-label")?.textContent ?? "";

    const overlay = document.createElement("div");
    overlay.style.cssText = [
      "position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:9998;",
      "display:flex;align-items:center;justify-content:center;",
      "flex-direction:column;gap:1.2rem;cursor:zoom-out;padding:2rem;"
    ].join("");

    // Se tiver imagem real carregada, mostra ela; senão mostra placeholder visual
    if (img && img.naturalWidth > 0) {
      const lightboxImg = document.createElement("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = label;
      lightboxImg.style.cssText = "max-width:90vw;max-height:80vh;object-fit:contain;border:1px solid rgba(139,58,26,0.4);";
      overlay.appendChild(lightboxImg);
    } else {
      // Copia o fundo (gradiente placeholder) da galeria como prévia
      const inner = item.querySelector(".gallery-item-inner");
      const bg = inner ? window.getComputedStyle(inner).background : "none";
      const preview = document.createElement("div");
      preview.style.cssText = `width:min(600px,90vw);height:min(400px,60vh);background:${bg};border:1px solid rgba(139,58,26,0.4);display:flex;align-items:center;justify-content:center;`;
      preview.innerHTML = `<span style="font-family:'Share Tech Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;color:#4a4840;">SEM FOTO — adicione em public/images/gallery/</span>`;
      overlay.appendChild(preview);
    }

    // Label e instrução de fechar
    const info = document.createElement("div");
    info.style.cssText = "text-align:center;display:flex;flex-direction:column;gap:0.4rem;";
    info.innerHTML = `
      <span style="font-family:'Share Tech Mono',monospace;font-size:0.75rem;letter-spacing:0.2em;color:#d4d0b8;">${label}</span>
      <span style="font-family:'Share Tech Mono',monospace;font-size:0.6rem;letter-spacing:0.3em;color:#4a4840;">ESC ou clique para fechar</span>
    `;
    overlay.appendChild(info);

    const close = () => overlay.remove();
    overlay.addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); }, { once: true });
    document.body.appendChild(overlay);
  });
});
