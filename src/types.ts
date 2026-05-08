// ============================================================
// TIPOS — edite aqui para adicionar campos novos
// ============================================================

export interface BandMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  gear: string;
  photo?: string; // caminho relativo a /images/members/
}

export interface Show {
  id: string;
  date: string;        // formato: "YYYY-MM-DD"
  dayLabel: string;    // ex: "JUN 14"
  year: string;        // ex: "2025"
  city: string;
  venue: string;
  time: string;
  ticketsUrl?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;         // caminho relativo a /images/gallery/
  label: string;
  category: "show" | "studio" | "backstage" | "tour";
}

export interface Event {
  id: string;
  date: string;
  dayNumber: string;
  title: string;
  location: string;
  address: string;
  description: string;
  status: "past"| "upcoming" | "soldout" | "free";
  link?: string;
  linkLabel?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;        // símbolo/caractere decorativo
}

export interface BandData {
  band: {
    name: string;
    tagline: string;
    city: string;
    state: string;
    founded: string;
    genre: string;
    description: string[];
    email: string;
  };
  members: BandMember[];
  shows: Show[];
  gallery: GalleryPhoto[];
  events: Event[];
  socials: SocialLink[];
  timeline: { year: string; text: string }[];
}
