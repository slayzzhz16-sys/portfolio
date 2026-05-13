import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LangProvider, useLang } from "@/contexts/LangContext";
import { projects, getProjectIndex } from "@/data/projects";
import ToolBadge from "@/components/ToolBadge";

const DetailInner = ({ slug }: { slug: string }) => {
  const { t, lang, toggle } = useLang();
  const idx = getProjectIndex(slug);
  if (idx === -1) return <Navigate to="/projets" replace />;
  const project = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

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
            <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
              {project.category}
              {project.subCategory ? ` · ${project.subCategory}` : ""}
            </p>
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

          {/* Prev / Next */}
          <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-4 md:gap-6 border-t border-border/40 pt-10">
            <Link
              to={`/projet/${prev.slug}`}
              className="group flex items-center gap-4 p-5 md:p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-500"
            >
              <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] md:text-xs font-body uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  {t("Projet précédent", "Previous project")}
                </p>
                <p className="font-display font-bold text-base md:text-lg text-foreground">
                  {t(prev.titleFr, prev.titleEn)}
                </p>
              </div>
            </Link>
            <Link
              to={`/projet/${next.slug}`}
              className="group flex items-center justify-end gap-4 p-5 md:p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-500"
            >
              <div className="text-right">
                <p className="text-[10px] md:text-xs font-body uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  {t("Projet suivant", "Next project")}
                </p>
                <p className="font-display font-bold text-base md:text-lg text-foreground">
                  {t(next.titleFr, next.titleEn)}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
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
