import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { LangProvider, useLang } from "@/contexts/LangContext";
import { projects, getProjectIndex } from "@/data/projects";
import ToolBadge from "@/components/ToolBadge";
import caloreaIcon from "@/assets/projects/calorea-logo.png";
import caloreaLogoFull from "@/assets/projects/calorea-logo-full.png";
import caloreaLogo from "@/assets/projects/calorea-logo.jpg";
import caloreaFlyer from "@/assets/projects/calorea-flyer.jpg";
import caloreaPublicite from "@/assets/projects/calorea-publicite.mp4";
import caloreaPublicitePoster from "@/assets/projects/calorea-publicite-poster.jpg";
import caloreaSite from "@/assets/projects/calorea-site.png";

const caloreaWebsiteUrl = "https://but1.mmi-iutsf.org/S1/2026_S1/groupe_d/Acceuil.html";

const DetailInner = ({ slug }: { slug: string }) => {
  const { t, lang, toggle } = useLang();
  const idx = getProjectIndex(slug);
  if (idx === -1) return <Navigate to="/projets" replace />;
  const project = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const isCalorea = project.slug === "calorea";
  const caloreaSections = [
    {
      titleFr: "Logo & icône",
      titleEn: "Logo & Icon",
      descFr: "Le système visuel principal de Caloréa, avec un logo organique et une icône pensée pour rester identifiable seule.",
      descEn: "Caloréa's main visual system, with an organic logo and an icon designed to stay recognizable on its own.",
      images: [caloreaLogoFull, caloreaLogo, caloreaIcon],
      alt: "Logo Caloréa",
    },
    {
      titleFr: "Charte graphique",
      titleEn: "Brand Guidelines",
      descFr: "Les couleurs, les choix graphiques et les règles qui donnent à l'identité son côté naturel, doux et accessible.",
      descEn: "The colors, visual choices, and rules that give the identity its natural, warm, and accessible feel.",
      image: project.media[0]?.src,
      alt: "Charte graphique Caloréa",
    },
    {
      titleFr: "Site web",
      titleEn: "Website",
      descFr: "Une maquette web simple pour présenter l'association, son univers et le fonctionnement des box.",
      descEn: "A simple website mockup presenting the association, its universe, and how the boxes work.",
      image: caloreaSite,
      alt: "Site web Caloréa",
      href: caloreaWebsiteUrl,
    },
    {
      titleFr: "Flyer",
      titleEn: "Flyer",
      descFr: "Un support imprimé pour expliquer le projet, les missions de l'association et les moyens de contact.",
      descEn: "A printed asset explaining the project, the association's mission, and contact information.",
      image: caloreaFlyer,
      alt: "Flyer Caloréa",
    },
    {
      titleFr: "Vidéo publicitaire",
      titleEn: "Advertising Video",
      descFr: "Une courte vidéo pensée comme support de communication pour présenter l'univers Caloréa.",
      descEn: "A short video designed as a communication asset to present the Caloréa universe.",
      video: caloreaPublicite,
      poster: caloreaPublicitePoster,
    },
  ];

  return (
    <div className="min-h-screen bg-background bg-noise">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding !py-4 md:!py-6 backdrop-blur-xl bg-background/60 border-b border-border/50"
      >
        <Link to="/" className="font-display text-xl font-bold text-gradient-primary">
          Imad<span className="text-foreground">.</span>B
        </Link>
        <button
          onClick={toggle}
          className="px-3 py-1.5 rounded-full border border-primary/50 text-sm font-body font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </motion.nav>

      <div className="pt-24 md:pt-32 section-padding">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/projets"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("Tous les projets", "All projects")}
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10 md:mb-14"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase">
                {project.category}
                {project.subCategory ? ` · ${project.subCategory}` : ""}
              </p>

              {/* Status badge */}
              {project.slug === "biere-fictive" && (
                <span className="inline-flex items-center rounded-full bg-amber-500/15 text-amber-200 border border-amber-400/30 px-3 py-1 text-[11px] md:text-xs font-body uppercase tracking-wider">
                  {lang === "fr" ? "EN COURS" : "IN PROGRESS"}
                </span>
              )}
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6">
              {t(project.titleFr, project.titleEn)}
            </h1>

            <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl leading-relaxed mb-8">
              {t(project.descFr, project.descEn)}
            </p>

            <div>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-foreground/50 mb-3">
                {t("Outils utilisés", "Tools used")}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <ToolBadge key={tool} tool={tool} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Media */}
          {isCalorea ? (
            <div className="grid gap-8 md:grid-cols-2">
              {caloreaSections.map((item, i) => (
                <motion.article
                  key={item.titleFr}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="overflow-hidden rounded-lg border border-border/30 bg-card/35"
                >
                  <div className="aspect-[16/11] bg-white">
                    {"video" in item ? (
                      <video
                        src={item.video}
                        poster={item.poster}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full bg-black object-contain"
                      />
                    ) : "images" in item ? (
                      <div className="flex h-full w-full items-center justify-center gap-8 p-8">
                        {item.images.map((image, index) => (
                          <img
                            key={image}
                            src={image}
                            alt={index === 0 ? "Logo Caloréa" : "Icône Caloréa"}
                            className="max-h-full min-w-0 flex-1 object-contain"
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-extrabold text-foreground">
                          {t(item.titleFr, item.titleEn)}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {t(item.descFr, item.descEn)}
                        </p>
                      </div>
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={t("Ouvrir le site Caloréa", "Open Caloréa website")}
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="space-y-6 md:space-y-10">
              {project.media.length === 0 ? (
              <div className="aspect-[16/10] flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-muted-foreground/40">
                  {project.titleFr.charAt(0)}
                </span>
              </div>
              ) : (
                project.media.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="overflow-visible relative"
                  >
                    {m.type === "video" ? (
                      <video
                        src={m.src}
                        controls
                        playsInline
                        className="w-full h-auto bg-black"
                      />
                    ) : (
                      <img
                        src={m.src}
                        alt={m.alt ?? t(project.titleFr, project.titleEn)}
                        className="w-full h-auto object-contain select-none"
                      />
                    )}
                  </motion.div>
                ))
              )}
            </div>
          )}

          {/* Prev / Next */}
          <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-10 pt-10 border-t border-border/20">
            <Link to={`/projet/${prev.slug}`} className="group flex items-center gap-4">
              <ArrowLeft className="w-5 h-5 text-primary transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <p className="text-[10px] md:text-xs font-body uppercase tracking-[0.28em] text-foreground/60 mb-1">
                  {t("Projet précédent", "Previous project")}
                </p>
                <p className="font-serif-2 font-extrabold text-lg md:text-xl text-foreground leading-tight">
                  {t(prev.titleFr, prev.titleEn)}
                </p>
              </div>
            </Link>

            <Link to={`/projet/${next.slug}`} className="group flex items-center justify-end gap-4">
              <div className="text-right">
                <p className="text-[10px] md:text-xs font-body uppercase tracking-[0.28em] text-foreground/60 mb-1">
                  {t("Projet suivant", "Next project")}
                </p>
                <p className="font-serif-2 font-extrabold text-lg md:text-xl text-foreground leading-tight">
                  {t(next.titleFr, next.titleEn)}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  return (
    <LangProvider>
      <DetailInner slug={slug ?? ""} />
    </LangProvider>
  );
};

export default ProjectDetail;
