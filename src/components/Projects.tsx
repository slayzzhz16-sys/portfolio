import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import { CategorySections } from "@/components/CategorySections";

const Projects = () => {
  const { t } = useLang();

  const graphe = projects.filter((p) => p.category === "Graphisme");
  const audio = projects.filter((p) => p.category === "Audiovisuel");
  const sae = projects.filter((p) => p.category === "SAE");

  return (
    <section id="projects" className="section-padding bg-noise relative">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-primary/90 font-body text-sm tracking-[0.35em] uppercase mb-6"
        >
          {t("Projets", "Projects")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-14"
        >
          {t("Graphisme", "Graphisme")}
          <span className="text-gradient-primary"> / </span>
          {t("Audiovisuel", "Audiovisuel")}
          <span className="text-gradient-primary"> / </span>
          {t("SAE", "SAE")}
        </motion.h2>

        <CategorySections graphe={graphe} audio={audio} sae={sae} />

        <div className="h-10" />
      </div>
    </section>
  );
};

export default Projects;


