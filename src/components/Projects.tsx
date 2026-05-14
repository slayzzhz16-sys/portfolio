import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import { CategorySections } from "@/components/CategorySections";

const Projects = () => {
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
          className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-[0.12em] uppercase mb-20"
        >
          <span className="text-foreground">MES </span>
          <span className="text-gradient-primary">PROJETS</span>
        </motion.p>

        <CategorySections graphe={graphe} audio={audio} sae={sae} />

        <div className="h-10" />
      </div>
    </section>
  );
};

export default Projects;
