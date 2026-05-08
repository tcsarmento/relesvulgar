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
    { year: "2018 — INÍCIO", text: "Formação da banda num porão na Cremação. Primeiros riffs surgem de uma guitarra com uma corda partida." },
    { year: "2019 — DEMOS", text: "Gravação caseira de 4 demos. Primeiro show no Bar do Cazuza, lotado de amigos e cerveja barata." },
    { year: "2020 — ESTÚDIO", text: "Primeiro EP 'RUÍDO BRANCO' gravado em 48h. Lançamento online alcança 10k plays no primeiro mês." },
    { year: "2022 — EXPANSÃO", text: "Turnê pelo Norte e Nordeste. 14 shows em 3 estados. Entrada de Mara no baixo transforma o som da banda." },
    { year: "2024 — ÁLBUM", text: "Gravação do álbum debut 'VAZIO ESTÁTICO' com produção de Rafael Moraes. Lançamento previsto para 2025." },
  ],

  members: [
    {
      id: "kaio",
      name: "Kaio Ramos",
      initials: "KR",
      role: "Guitarra · Voz",
      bio: "Fundador da banda. Toca desde os 14 anos, aprendeu sozinho vendo tabs erradas no YouTube. Escreve as letras num caderno manchado de óleo de guitarra.",
      gear: "Gibson SG '78 · Fender Bassman · Big Muff",
      photo: "kaio.jpg",
    },
    {
      id: "mara",
      name: "Mara Silva",
      initials: "MS",
      role: "Baixo · Backing",
      bio: "Entrou na banda em 2022 e mudou tudo. Vem do jazz, mas abraçou o barulho com uma força que deixou todo mundo em silêncio.",
      gear: "Fender P-Bass · Ampeg SVT · Sans Amp",
      photo: "mara.jpg",
    },
    {
      id: "tiago",
      name: "Tiago Fonseca",
      initials: "TF",
      role: "Bateria",
      bio: "Toca como se estivesse com raiva de tudo — mas é o mais tranquilo da banda. Diz que a bateria é meditação. Ninguém acredita.",
      gear: "DW Collector · Zildjian A · Remo Ambassador",
      photo: "tiago.jpg",
    },
    {
      id: "pedro",
      name: "Pedro Oliveira",
      initials: "PO",
      role: "Guitarra · Noise",
      bio: "Responsável pelo caos controlado. Usa pedais que ninguém sabe o nome e cria texturas que a maioria das pessoas chama de 'estranho' e a banda chama de perfeito.",
      gear: "Jazzmaster · Fender Twin · Myriad of pedals",
      photo: "pedro.jpg",
    },
  ],

  shows: [
    { id: "s1", date: "2025-06-14", dayLabel: "JUN 14", year: "2025", city: "BELÉM", venue: "Cine Líbero Luxardo", time: "20h", ticketsUrl: "#" },
    { id: "s2", date: "2025-07-05", dayLabel: "JUL 05", year: "2025", city: "FORTALEZA", venue: "Estoril · Festival Noroeste", time: "22h", ticketsUrl: "#" },
    { id: "s3", date: "2025-07-19", dayLabel: "JUL 19", year: "2025", city: "SÃO LUÍS", venue: "Theatro Artur Azevedo", time: "21h", ticketsUrl: "#" },
    { id: "s4", date: "2025-08-02", dayLabel: "AGO 02", year: "2025", city: "MANAUS", venue: "Studio 5 · Turnê Norte", time: "22h", ticketsUrl: "#" },
    { id: "s5", date: "2025-08-30", dayLabel: "AGO 30", year: "2025", city: "RECIFE", venue: "Mercado Eufrásio Barbosa", time: "20h", ticketsUrl: "#" },
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
      date: "14 de Junho, 2025",
      dayNumber: "14",
      title: "Noite de Lançamento — Belém",
      location: "Cine Líbero Luxardo · Nazaré",
      address: "Belém, PA",
      description: "Lançamento oficial do álbum 'Vazio Estático'. Abertura com Banda Suporte às 20h.",
      status: "upcoming",
      link: "#",
      linkLabel: "Comprar Ingresso",
    },
    {
      id: "e2",
      date: "05 de Julho, 2025",
      dayNumber: "05",
      title: "Festival Noroeste — Fortaleza",
      location: "Estoril · Meireles",
      address: "Fortaleza, CE",
      description: "Participação especial no maior festival de rock do Nordeste. 6 bandas, 1 noite.",
      status: "upcoming",
      link: "#",
      linkLabel: "Ver Programação",
    },
    {
      id: "e3",
      date: "22 de Março, 2025",
      dayNumber: "22",
      title: "Ruído Branco — Edição Especial",
      location: "Casa das Onze Janelas",
      address: "Belém, PA",
      description: "Show comemorativo de 7 anos da banda. Ingressos esgotados em 48h.",
      status: "soldout",
      link: "#",
      linkLabel: "Lista de Espera",
    },
    {
      id: "e4",
      date: "02 de Agosto, 2025",
      dayNumber: "02",
      title: "Ensaio Aberto — Estúdio",
      location: "Noise Room · Marco",
      address: "Belém, PA",
      description: "Sessão aberta ao público do ensaio geral da turnê. Vagas limitadas a 30 pessoas.",
      status: "free",
      link: "#",
      linkLabel: "Reservar Vaga",
    },
  ],

  socials: [
    { id: "instagram", name: "Instagram", handle: "@staticvoid.oficial",       url: "https://instagram.com", icon: "◈" },
    { id: "youtube",   name: "YouTube",   handle: "/staticvoid",                url: "https://youtube.com",   icon: "▶" },
    { id: "spotify",   name: "Spotify",   handle: "Static Void",                url: "https://spotify.com",   icon: "◎" },
    { id: "soundcloud",name: "SoundCloud",handle: "staticvoidband",             url: "https://soundcloud.com",icon: "∿" },
    { id: "facebook",  name: "Facebook",  handle: "/staticvoidoficial",         url: "https://facebook.com",  icon: "◻" },
    { id: "tiktok",    name: "TikTok",    handle: "@staticvoid",                url: "https://tiktok.com",    icon: "♦" },
    { id: "email",     name: "E-mail",    handle: "contato@relesvulgar.com.br",  url: "mailto:contato@relesvulgar.com.br", icon: "✉" },
    { id: "linktree",  name: "Linktree",  handle: "linktr.ee/staticvoid",       url: "https://linktr.ee",     icon: "∞" },
  ],
};
