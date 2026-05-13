import afficheVoyage from "@/assets/projects/affiche-voyage-dubai.jpg";
import autoPortrait from "@/assets/projects/auto-portrait-illustrator.jpg";
import afficheBeyonce from "@/assets/projects/affiche-beyonce.jpg";
import afficheEauVerte from "@/assets/projects/affiche-eau-verte.jpg";
import caloreaCharte from "@/assets/projects/calorea-charte.jpg";

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
      "Création d'une affiche de voyage sur Dubai, graphique et colorée. Travail sur la composition, la typographie et les formes vectorielles.",
    descEn:
      "A vibrant, graphic travel poster featuring Dubai. Focus on composition, typography and vector shapes.",
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
      "Auto-portrait réalisé sur Adobe Illustrator. Vectorisation, colorimétrie et style graphique personnel.",
    descEn:
      "Self-portrait made in Adobe Illustrator. Vectorization, color work and personal graphic style.",
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
      "Affiche créative inspirée de l'album Cowboy Carter de Beyoncé. Photomontage, composition graphique et typographie expressive.",
    descEn:
      "Creative poster inspired by Beyoncé's Cowboy Carter. Photomontage, graphic composition and expressive typography.",
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
      "Affiche sur le cycle de l'eau verte pour le campus UPEC. Composition graphique alliant photo et typographie.",
    descEn:
      "Poster about the green water cycle for the UPEC campus. Graphic composition blending photography and typography.",
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
      "Court-métrage en stop motion réalisé image par image. Mise en scène, animation et montage.",
    descEn:
      "Stop motion short film made frame by frame. Staging, animation and editing.",
    tools: ["Pr"],
    cover: afficheEauVerte, // placeholder visual fallback; video drives detail page
    media: [{ type: "video", src: "/projects/stop-motion.mp4" }],
  },
  {
    slug: "calorea",
    category: "SAE",
    titleFr: "CaloréA — Identité de marque & Communication",
    titleEn: "CaloréA — Brand Identity & Communication",
    descFr:
      "Identité complète d'une association fictive accompagnant la guérison par la nutrition. Charte graphique (logo, palette verte et teintes chaleureuses), site web au parcours simplifié et packaging de la Box CaloréA. Projet mené en équipe avec une organisation rythmée par un planning de Gantt.",
    descEn:
      "Full identity for a fictional association supporting healing through nutrition. Brand guidelines (logo, green palette and warm tones), website with a simplified user journey and CaloréA Box packaging. Team project organised around a Gantt chart.",
    tools: ["Ai", "Ps", "Id"],
    cover: caloreaCharte,
    media: [{ type: "image", src: caloreaCharte, alt: "Charte CaloréA" }],
  },
  {
    slug: "biere-fictive",
    category: "SAE",
    titleFr: "Marque de Bière Fictive — S2",
    titleEn: "Fictional Beer Brand — S2",
    descFr:
      "Création d'une marque de bière fictive. Branding complet, packaging, campagne de communication et identité de marque.",
    descEn:
      "Creating a fictional beer brand. Full branding, packaging, communication campaign, and brand identity.",
    tools: ["Ai", "Ps"],
    cover: afficheBeyonce,
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
