import express from "express";
import path from "path";
import { bandData } from "./data";
import { buildHtml } from "./template";

const app = express();
const PORT = process.env.PORT ?? 3000;

// Arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, "../public")));

// Página principal — gerada dinamicamente a partir dos dados
app.get("/", (_req, res) => {
  const html = buildHtml(bandData);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(html);
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", band: bandData.band.name });
});

// API para dados crus (útil pra debug)
app.get("/api/data", (_req, res) => {
  res.json(bandData);
});

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`\n🎸 ${bandData.band.name} rodando em http://localhost:${PORT}`);
  console.log(`   Para editar o conteúdo: src/data.ts`);
  console.log(`   Para editar o visual:   public/css/style.css`);
  console.log(`   Fotos dos integrantes:  public/images/members/`);
  console.log(`   Fotos da galeria:       public/images/gallery/\n`);
});
