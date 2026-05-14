import { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { LangProvider, useLang } from "@/contexts/LangContext";
import { projects, categories, Category } from "@/data/projects";

const ListInner = () => {
  const { t, lang, toggle } = useLang();
  const { cat } = useParams();
  const initial = useMemo<Category | "all">(() => {
    if (!cat) return "all";
    const map: Record<string, Category> = {
      illustrator: "Graphisme",
      photoshop: "Graphisme",
      audiovisuel: "Audiovisuel",
      sae: "SAE",
      graphisme: "Graphisme",
    };
    return map[cat.toLowerCase()] ?? "all";
  }, [cat]);

  const [active, setActive] = useState<Category | "all">(initial);
  useEffect(() => setActive(initial), [initial]);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding !py-4 md:!py-6 backdrop-blur-xl bg-background/60"
      >
        <Link to="/" className="font-display text-xl font-bold text-gradient-primary">
          Imad<span className="text-foreground">.</span>B
        </Link>
        <button
          onClick={toggle}
          className="px-3 py-1.5 rounded-full text-sm font-body font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </motion.nav>

      <div className="pt-24 md:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("Retour à l'accueil", "Back home")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
              {t("Portfolio", "Portfolio")}
            </p>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6">
              {t("Projets", "Projects")}
            </h1>
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl leading-relaxed">
              {t(
                "Une sélection de projets de design graphique, audiovisuel et SAE.",
                "A selection of graphic design, audiovisual and SAE projects."
              )}
            </p>
          </motion.div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14">
            {(["all", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-body uppercase tracking-wider transition-all duration-300 ${
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c === "all" ? t("Tous", "All") : c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                {/* Galerie/Editorial : image posée directement (sans card/box) */}
                <Link
                  to={`/projet/${p.slug}`}
                  className="block rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex flex-col">
                    <div className="aspect-[4/5]">
                      {p.media[0]?.type === "video" ? (
                        <video
                          src={p.media[0].src}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={p.cover}
                          alt={t(p.titleFr, p.titleEn)}
                          className="w-full h-full object-cover object-top"
                        />
                      )}
                    </div>


                    <div className="mt-4 md:mt-6 pointer-events-none">
                      <span className="inline-block text-[10px] md:text-xs font-body uppercase tracking-[0.28em] text-foreground/70">
                        {p.category}
                        {p.subCategory ? ` · ${p.subCategory}` : ""}
                      </span>

                      <h3 className="mt-3 font-serif-2 font-extrabold text-2xl md:text-3xl lg:text-4xl text-foreground leading-[0.95]">
                        {t(p.titleFr, p.titleEn)}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-20">
              {t("Aucun projet dans cette catégorie.", "No projects in this category.")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsList = () => (
  <LangProvider>
    <ListInner />
  </LangProvider>
);

export default ProjectsList;
