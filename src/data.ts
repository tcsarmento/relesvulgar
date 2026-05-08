import { BandData } from "./types";

// ============================================================
// DADOS DA BANDA — edite este arquivo para atualizar o site
// ============================================================

export const bandData: BandData = {
  band: {
    name: "RELESVULGAR",
    tagline: "Distorção, silêncio e caos.",
    city: "Belém",
    state: "PA",
    founded: "2018",
    genre: "Rock · Grunge · Noise",
    description: [
      "A Relesvulgar é uma banda de rock alternativo de Belém do Pará,",
"formada em 2018 pelos amigos de longa data Fábio Garcia e Marcelo",
"Cunha. Desde o início, o projeto buscou construir uma identidade sonora",
"própria, misturando diferentes vertentes do rock com uma abordagem",
"intensa e experimental. Com influências que transitam entre o rock dos",
"anos 90, noise rock, blues e elementos da música popular brasileira, a",
"banda desenvolve um som marcante, que alterna entre momentos sutis e",
"arranjos mais densos e pesados."
    ],
    email: "contato@relesvulgar.com.br",
  },

  timeline: [
  {
    year: "2015 — ORIGEM",
    text: "Marcelo Cunha e Fábio Garcia começam a ensaiar covers de Alice in Chains com a intenção de tocar em bares da cidade. Durante um ensaio nasce 'Peixe Blues', primeira composição autoral que dá origem à Relesvulgar."
  },
  {
    year: "2015 — FORMAÇÃO",
    text: "Benilson Lima assume o baixo e Diógenes Assunção entra na bateria. Surge oficialmente a primeira formação da Relesvulgar, unindo amizade, rock e composições próprias."
  },
  {
    year: "2016–2020 — UNDERGROUND",
    text: "A banda percorre bares e casas de show do Pará misturando covers e músicas autorais. Marcelo e Fábio ampliam o catálogo da banda enquanto o nome Relesvulgar se fortalece no underground paraense."
  },
  {
    year: "2021 — YOUTUBE",
    text: "Motivados por Diógenes, a banda lança cinco vídeos ao vivo no YouTube apresentando suas primeiras composições oficialmente ao público."
  },
  {
    year: "2022 — TRANSIÇÃO",
    text: "A apresentação no Rock Gasômetro marca o encerramento da primeira formação. Durante o período pós-pandemia, Benilson deixa a banda após oito anos de trajetória."
  },
  {
    year: "2023–2024 — RESISTÊNCIA",
    text: "Mesmo em trio, Marcelo, Fábio e Dió seguem produzindo material autoral. Fábio assume também as gravações de baixo enquanto a banda prepara seus primeiros lançamentos oficiais."
  },
  {
    year: "2025 — NOVA FASE",
    text: "No dia 1º de abril, a Relesvulgar lança o single 'Amor? Exílio!' nas plataformas digitais, marcando uma nova etapa na trajetória da banda."
  },
  {
    year: "2025 — OTTO",
    text: "Thiago Sarmento, batizado pela banda como Otto, assume oficialmente o baixo após cerca de dois anos de hiato nos palcos, trazendo nova energia criativa ao grupo."
  },
  {
    year: "2025 — A CELA",
    text: "Em 21 de dezembro, a banda lança 'A Cela' junto de seu primeiro videoclipe oficial, com produção audiovisual de João Barros."
  },
  {
    year: "2026 — PALCOS",
    text: "A Relesvulgar grava e lança um show ao vivo no YouTube, reafirmando sua força no palco e consolidando a nova formação da banda."
  },
],

  members: [
    {
      id: "Dio",
      name: "Diógenis Assunção - Dió",
      initials: "DA",
      role: "Bateria",
      bio: "O baterista da banda transforma peso em groove e faz cada virada parecer arte.",
      gear: "Sonor · Iron Cobra · Zildjian · Sabian · Stagg",
      photo: "dio.jpg",
    },
    {
      id: "Fabio",
      name: "Fábio Garcia",
      initials: "FG",
      role: "Vocal",
      bio: "Canta como quem não precisava provar nada. A voz carrega peso, melodia e caos na medida certa.",
      gear: "Sure SM76 · Pedaleira BOSS VE",
      photo: "fabio.jpg",
    },
    {
      id: "thiago",
      name: "Thiago Sarmento - Otto",
      initials: "TS",
      role: "Baixo",
      bio: "Com menos tempo de banda e com a responsabilidade de segurar os graves da Reles",
      gear: "Squier Deluxe · Sunsamp PSA1 · Blackstar",
      photo: "thiago.jpg",
    },
    {
      id: "marcelo",
      name: "Marcelo Garcia",
      initials: "MG",
      role: "Guitarra · Vocal",
      bio: "Responsável pelo caos controlado. Usa pedais que ninguém sabe o nome e cria texturas que a maioria das pessoas chama de 'estranho' e a banda chama de perfeito.",
      gear: "Cort · Jackson · Tagima · Ampero one · Pedais",
      photo: "marcelo.jpg",
    },
  ],

  shows: [
  {
    id: "s1",
    date: "2025-12-21",
    dayLabel: "DEZ 21",
    year: "2025",
    city: "BELÉM",
    venue: "Abbey Monster · Lançamento de 'A Cela'",
    time: "20h",
    ticketsUrl: "#"
  },
  {
    id: "s3",
    date: "2026-05-03",
    dayLabel: "MAI 03",
    year: "2026",
    city: "BELÉM",
    venue: "Porão do Rock · Seletivas",
    time: "14h",
    ticketsUrl: "#"
  },
],

  gallery: [
    { id: "g1", src: "show-belem-2024.jpg",    label: "Show de Lançamento · Teatro Waldemar Henrique", category: "show" },
    { id: "g2", src: "estudio-2023.jpg",         label: "Gravações do EP · 2023",                         category: "studio" },
    { id: "g3", src: "festival-norte-2024.jpg",  label: "Festival Norte · 2024",                           category: "show" },
    { id: "g4", src: "kaio-pedro-fortaleza.jpg", label: "Kaio e Pedro · Fortaleza",                        category: "tour" },
    { id: "g5", src: "ensaio-porao-2022.jpg",    label: "Ensaio no Porão · 2022",                          category: "backstage" },
    { id: "g6", src: "mara-baixo.jpg",           label: "Mara Silva · Baixo",                              category: "show" },
    { id: "g7", src: "tiago-bateria.jpg",        label: "Tiago Fonseca · Bateria",                         category: "show" },
    { id: "g8", src: "soundcheck-saoluis.jpg",   label: "Soundcheck · São Luís 2024",                      category: "backstage" },
  ],

events: [
  {
    id: "e1",
    date: "06 de Julho, 2025",
    dayNumber: "06",
    title: "Gravação do Videoclipe — A Cela",
    location: "Teatro Waldemar Henrique",
    address: "Belém, PA",
    description: "Gravação oficial do primeiro videoclipe da Relesvulgar para o single 'A Cela'.",
    status: "past",
    link: "#",
    linkLabel: "Ver Bastidores",
  },
],
  socials: [
    { id: "instagram", name: "Instagram", handle: "@relesvulgar_",       url: "https://www.instagram.com/relesvulgar_?igsh=MXA2eHZlOWlnYTV4Yw==", icon: "◈" },
    { id: "youtube",   name: "YouTube",   handle: "/@Relesvulgar",                url: "https://www.youtube.com/@Relesvulgar",   icon: "▶" },
    { id: "spotify",   name: "Spotify",   handle: "5tXWmAQ9ygx0HTPpgee4cZ",                url: "https://open.spotify.com/artist/5tXWmAQ9ygx0HTPpgee4cZ?si=Y8it2I_YQVWthKFKIlzlCA",   icon: "◎" },
    { id: "tiktok",    name: "TikTok",    handle: "@relesvulgar",                url: "https://www.tiktok.com/@relesvulgar",    icon: "♦" },
    { id: "email",     name: "E-mail",    handle: "contato@relesvulgar.com.br",  url: "mailto:contato@relesvulgar.com.br", icon: "✉" },
  ],
};
