# 🎸 STATIC VOID — Site da Banda

Projeto TypeScript + Node.js + Express para o site da banda.

## Estrutura do Projeto

```
staticvoid/
├── src/
│   ├── server.ts      ← servidor Express (não precisa editar)
│   ├── data.ts        ← ✏️  TODOS OS DADOS DA BANDA (edite aqui)
│   ├── template.ts    ← gerador de HTML (não precisa editar)
│   └── types.ts       ← tipos TypeScript (não precisa editar)
│
├── public/
│   ├── css/
│   │   └── style.css  ← ✏️  estilos (edite para mudar visual)
│   ├── js/
│   │   └── main.js    ← scripts do cliente
│   └── images/
│       ├── hero/      ← imagem de fundo do hero (opcional)
│       ├── members/   ← fotos dos integrantes (kaio.jpg, mara.jpg...)
│       ├── gallery/   ← fotos da galeria
│       └── events/    ← imagens de eventos (opcional)
│
├── package.json
├── tsconfig.json
└── README.md
```

## Como Rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em modo desenvolvimento (com hot-reload)
```bash
npm run dev
```
Acesse: http://localhost:3000

### 3. Build para produção
```bash
npm run build
npm start
```

---

## Como Editar o Conteúdo

**Tudo que aparece no site está em `src/data.ts`.**

### Mudar nome da banda, gênero, cidade
```ts
band: {
  name: "NOME DA SUA BANDA",
  genre: "Rock · Metal · Whatever",
  city: "Sua Cidade",
  // ...
}
```

### Adicionar integrante
```ts
{
  id: "novo",
  name: "Nome Completo",
  initials: "NC",
  role: "Instrumento",
  bio: "Bio do integrante.",
  gear: "Equipamentos usados",
  photo: "nome-do-arquivo.jpg", // coloque em public/images/members/
}
```

### Adicionar show
```ts
{
  id: "s6",
  date: "2025-09-10",
  dayLabel: "SET 10",
  year: "2025",
  city: "CIDADE",
  venue: "Nome do Local",
  time: "21h",
  ticketsUrl: "https://link-dos-ingressos.com",
}
```

### Adicionar foto à galeria
1. Coloque o arquivo em `public/images/gallery/`
2. Adicione no array `gallery` em `data.ts`:
```ts
{
  id: "g9",
  src: "nome-do-arquivo.jpg",
  label: "Descrição da foto",
  category: "show", // show | studio | backstage | tour
}
```

### Mudar links das redes sociais
Edite o array `socials` em `data.ts`, alterando o campo `url` e `handle`.

---

## Publicar Online (Netlify)

1. Rode `npm run build`
2. Faça deploy do projeto no [Netlify](https://netlify.com)
3. Configure o comando de build: `npm run build`
4. Configure o diretório de publish: `dist` (ou use o servidor Node)

Para usar como servidor Node no Netlify/Railway/Render:
- Start command: `npm start`
- Build command: `npm run build`
