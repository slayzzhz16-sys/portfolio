import afficheVoyage from "@/assets/projects/affiche-voyage-dubai.jpg";
import autoPortrait from "@/assets/projects/auto-portrait-illustrator.jpg";
import afficheBeyonce from "@/assets/projects/affiche-beyonce.jpg";
import afficheEauVerte from "@/assets/projects/affiche-eau-verte.jpg";
import caloreaCover from "@/assets/projects/calorea-cover.jpg";
import caloreaCharte from "@/assets/projects/calorea-charte.png";
import festivalBeychellaCover from "@/assets/projects/branding-festival/festival-beychella-cover.jpg";
import festivalBeychellaPdf from "@/assets/projects/branding-festival/festival-beychella.pdf";
import skollrubAffiche from "@/assets/projects/skollrub/skollrub-affiche-promo-web.jpg";
import skollrubAngerbodaPost from "@/assets/projects/skollrub/skollrub-angerboda-post-1-web.jpg";
import skollrubCerisicidePost from "@/assets/projects/skollrub/skollrub-cerisicide-post-1-web.jpg";
import skollrubCharte from "@/assets/projects/skollrub/skollrub-charte.jpg";
import skollrubFreyaPost from "@/assets/projects/skollrub/skollrub-freya-post-1-web.jpg";
import skollrubOriginalPost from "@/assets/projects/skollrub/skollrub-original-post-1-web.jpg";
import skollrubVideoPub from "@/assets/projects/skollrub/skollrub-video-pub-web.mp4";

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
  cover: string; // image used in list grid and video poster
  media: { type: "image" | "video"; src: string; alt?: string }[];
  websiteUrl?: string;
  documentUrl?: string;
  documentLabelFr?: string;
  documentLabelEn?: string;
  inProgress?: boolean;
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
    cover: "/projects/stop-motion-cover.png",
    media: [{ type: "video", src: "/projects/stop-motion.mp4" }],
  },
  {
    slug: "clip-video-is-it-a-crime",
    category: "Audiovisuel",
    titleFr: "Clip vidéo — Is It A Crime",
    titleEn: "Music Video — Is It A Crime",
    descFr:
      "Un clip vidéo travaillé avec une esthétique VHS. J'ai construit l'ambiance visuelle, le rythme et les effets pour donner au morceau une atmosphère plus cinématographique.",
    descEn:
      "A music video built around a VHS aesthetic. I shaped the visual mood, rhythm, and effects to give the track a more cinematic atmosphere.",
    tools: ["Ae", "Pr"],
    cover: "/projects/is-it-a-crime-cover.png",
    media: [{ type: "video", src: "/projects/is-it-a-crime-web.m4v" }],
  },
  {
    slug: "calorea",
    category: "SAE",
    titleFr: "CALORÉA- Création d'une association",
    titleEn: "Caloréa — Brand Identity & Communication",
    descFr:
      "Un projet de groupe autour d'une association fictive liée à la nutrition. On a construit l'identité de Caloréa, de la charte graphique jusqu'au site et au packaging, avec une organisation suivie sur planning.",
    descEn:
      "A group project for a fictional association connected to nutrition. We built Caloréa's identity, from the brand guidelines to the website and packaging, while following a planned workflow.",
    tools: ["Ai", "Ps", "Pr"],
    cover: caloreaCover,
    media: [{ type: "image", src: caloreaCharte, alt: "Charte Caloréa" }],
  },
  {
    slug: "branding-festival",
    category: "SAE",
    titleFr: "Branding festival",
    titleEn: "Festival Branding",
    descFr:
      "Projet en cours de réalisation autour de l'identité visuelle d'un festival.",
    descEn:
      "Work in progress project focused on the visual identity of a festival.",
    tools: ["Ps", "Ai", "Id"],
    cover: festivalBeychellaCover,
    media: [{ type: "image", src: festivalBeychellaCover, alt: "Festival Beychella" }],
    documentUrl: festivalBeychellaPdf,
    documentLabelFr: "Voir le PDF",
    documentLabelEn: "View PDF",
  },
  {
    slug: "biere-fictive",
    category: "SAE",
    titleFr: "Skollrub — Création d'une marque de bière",
    titleEn: "Skollrub — Beer Brand Creation",
    descFr:
      "Création d'une marque de bière artisanale inspirée des mythes nordiques : identité visuelle, charte graphique, posts réseaux sociaux, affiche promotionnelle, vidéo publicitaire et site web.",
    descEn:
      "Creation of a craft beer brand inspired by Nordic myths: visual identity, brand guidelines, social media posts, promotional poster, advertising video, and website.",
    tools: ["Ai", "Ps", "Pr"],
    cover: skollrubCharte,
    media: [
      { type: "image", src: skollrubCharte, alt: "Charte graphique Skollrub" },
      { type: "image", src: skollrubOriginalPost, alt: "Post Skollrub Original" },
      { type: "image", src: skollrubAngerbodaPost, alt: "Post Skollrub Angerboda" },
      { type: "image", src: skollrubCerisicidePost, alt: "Post Skollrub Cerisicide" },
      { type: "image", src: skollrubFreyaPost, alt: "Post Skollrub Freya" },
      { type: "image", src: skollrubAffiche, alt: "Affiche promotionnelle Skollrub" },
      { type: "video", src: skollrubVideoPub, alt: "Vidéo publicitaire Skollrub" },
    ],
    websiteUrl: "https://skollrub.but1.mmi-iutsf.org",
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
