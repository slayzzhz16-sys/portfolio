import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";

interface SkillCategory {
  titleFr: string;
  titleEn: string;
  skills: { name: string; level: number }[];
  color: string;
}

const categories: SkillCategory[] = [
  {
    titleFr: "Design",
    titleEn: "Design",
    color: "primary",
    skills: [
      { name: "Figma", level: 50 },
      { name: "Illustrator", level: 65 },
      { name: "Photoshop", level: 65 },
      { name: "InDesign", level: 60 },
    ],
  },
  {
    titleFr: "Audiovisuel",
    titleEn: "Audiovisual",
    color: "glow-secondary",
    skills: [
      { name: "Premiere Pro", level: 65 },
    ],
  },
  {
    titleFr: "Web",
    titleEn: "Web",
    color: "glow-accent",
    skills: [
      { name: "HTML/CSS", level: 75 },
      { name: "JavaScript", level: 50 },
    ],
  },
  {
    titleFr: "Communication",
    titleEn: "Communication",
    color: "primary",
    skills: [
      { name: "Stratégie digitale", level: 80 },
      { name: "Social Media", level: 80 },
    ],
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary",
  "glow-secondary": "bg-glow-secondary",
  "glow-accent": "bg-accent",
};

const borderColorMap: Record<string, string> = {
  primary: "border-primary/30",
  "glow-secondary": "border-glow-secondary/30",
  "glow-accent": "border-accent/30",
};

const Skills = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="section-padding bg-noise relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          {t("Compétences", "Skills")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-4xl md:text-6xl mb-16"
        >
          {t("Ce que je ", "What I ")}
          <span className="text-gradient-primary">{t("maîtrise", "master")}</span>.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 md:p-8 rounded-2xl bg-card border ${borderColorMap[cat.color]} hover:glow-primary transition-all duration-500`}
            >
              <h3 className="font-display font-bold text-2xl mb-6 text-foreground">
                {t(cat.titleFr, cat.titleEn)}
              </h3>

              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-body text-foreground">{skill.name}</span>
                      <span className="text-xs font-body text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${colorMap[cat.color]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
