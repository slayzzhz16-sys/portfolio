import afficheVoyage from "@/assets/projects/affiche-voyage-dubai.jpg";
import autoPortrait from "@/assets/projects/auto-portrait-illustrator.jpg";
import afficheBeyonce from "@/assets/projects/affiche-beyonce.jpg";
import afficheEauVerte from "@/assets/projects/affiche-eau-verte.jpg";
import caloreaCharte from "@/assets/projects/calorea-charte.png";

export type Category = "Graphisme" | "Audiovisuel" | "SAE";
export type Tool = "Ps" | "Ai" | "Id" | "Pr" | "Ae" | "Figma";

export interface Project {
  slug: string;
  category: Category;
  subCategory?: string; // e.g. "Illustrator", "Photoshop"
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  tools: Tool[];
  cover: string; // image used in list grid
  media: { type: "image" | "video"; src: string; alt?: string }[];
}

export const projects: Project[] = [
  {
    slug: "affiche-voyage-dubai",
    category: "Graphisme",
    subCategory: "Illustrator",
    titleFr: "Affiche de Voyage — Dubai",
    titleEn: "Travel Poster — Dubai",
    descFr:
      "Une affiche de voyage autour de Dubai, avec une direction très graphique. J'ai surtout travaillé les formes, les couleurs et l'équilibre de la composition pour donner une vraie sensation de destination.",
    descEn:
      "A travel poster about Dubai with a strong graphic direction. I focused on shapes, colors, and composition to create a real destination feel.",
    tools: ["Ai"],
    cover: afficheVoyage,
    media: [{ type: "image", src: afficheVoyage, alt: "Affiche Dubai" }],
  },
  {
    slug: "auto-portrait-illustrator",
    category: "Graphisme",
    subCategory: "Illustrator",
    titleFr: "Auto-portrait",
    titleEn: "Self-Portrait",
    descFr:
      "Un auto-portrait vectoriel réalisé sur Illustrator. L'objectif était de trouver un style qui me ressemble, en simplifiant les traits sans perdre l'expression du visage.",
    descEn:
      "A vector self-portrait made in Illustrator. The goal was to find a style that felt personal, simplifying the shapes without losing the expression.",
    tools: ["Ai"],
    cover: autoPortrait,
    media: [{ type: "image", src: autoPortrait, alt: "Auto-portrait" }],
  },
  {
    slug: "affiche-beyonce-cowboy-carter",
    category: "Graphisme",
    subCategory: "Photoshop",
    titleFr: "Affiche Beyoncé — Cowboy Carter",
    titleEn: "Beyoncé Poster — Cowboy Carter",
    descFr:
      "Une affiche inspirée de l'univers Cowboy Carter. J'ai voulu garder l'énergie de l'album tout en construisant une composition plus personnelle avec du photomontage et une typo marquée.",
    descEn:
      "A poster inspired by the Cowboy Carter universe. I wanted to keep the album's energy while building a more personal composition with photomontage and bold typography.",
    tools: ["Ps"],
    cover: afficheBeyonce,
    media: [{ type: "image", src: afficheBeyonce, alt: "Affiche Beyoncé" }],
  },
  {
    slug: "cycle-eau-verte",
    category: "Graphisme",
    subCategory: "Photoshop",
    titleFr: "Le Cycle de l'Eau Verte",
    titleEn: "The Green Water Cycle",
    descFr:
      "Une affiche pensée pour parler du cycle de l'eau verte sur le campus UPEC. Le défi était de rendre un sujet assez sérieux plus visuel, clair et accrocheur.",
    descEn:
      "A poster about the green water cycle on the UPEC campus. The challenge was to make a serious topic feel visual, clear, and engaging.",
    tools: ["Ps"],
    cover: afficheEauVerte,
    media: [{ type: "image", src: afficheEauVerte, alt: "Cycle eau verte" }],
  },
  {
    slug: "stop-motion",
    category: "Audiovisuel",
    titleFr: "Stop Motion",
    titleEn: "Stop Motion",
    descFr:
      "Un court stop motion réalisé image par image. J'ai travaillé la mise en scène, le rythme et le montage pour donner vie à une idée simple avec peu de moyens.",
    descEn:
      "A short stop motion film made frame by frame. I worked on staging, rhythm, and editing to bring a simple idea to life with limited resources.",
    tools: ["Pr"],
    cover: afficheEauVerte, // placeholder visual fallback; video drives detail page
    media: [{ type: "video", src: "/projects/stop-motion.mp4" }],
  },
  {
    slug: "calorea",
    category: "SAE",
    titleFr: "Caloréa — Identité de marque & Communication",
    titleEn: "Caloréa — Brand Identity & Communication",
    descFr:
      "Un projet de groupe autour d'une association fictive liée à la nutrition. On a construit l'identité de Caloréa, de la charte graphique jusqu'au site et au packaging, avec une organisation suivie sur planning.",
    descEn:
      "A group project for a fictional association connected to nutrition. We built Caloréa's identity, from the brand guidelines to the website and packaging, while following a planned workflow.",
    tools: ["Ai", "Ps", "Pr"],
    cover: caloreaCharte,
    media: [{ type: "image", src: caloreaCharte, alt: "Charte Caloréa" }],
  },
  {
    slug: "biere-fictive",
    category: "SAE",
    titleFr: "Marque de Bière Fictive",
    titleEn: "Fictional Beer Brand",
    descFr:
      "Un projet en cours autour d'une marque de bière fictive. Je travaille sur l'univers de marque, le packaging et les supports de communication pour créer quelque chose de cohérent et identifiable.",
    descEn:
      "An ongoing project for a fictional beer brand. I'm working on the brand universe, packaging, and communication assets to create something coherent and recognizable.",
    tools: ["Ai", "Ps"],
    cover: "",
    media: [],
  },

];

export const categories: Category[] = ["Graphisme", "Audiovisuel", "SAE"];

export const toolLabels: Record<Tool, string> = {
  Ps: "Photoshop",
  Ai: "Illustrator",
  Id: "InDesign",
  Pr: "Premiere Pro",
  Ae: "After Effects",
  Figma: "Figma",
};

export const getProjectIndex = (slug: string) =>
  projects.findIndex((p) => p.slug === slug);
