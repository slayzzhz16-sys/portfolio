import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Languages, Wrench } from "lucide-react";

const CV = () => {
  const { t } = useLang();

  return (
    <section id="cv" className="section-padding bg-noise relative">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          {t("Curriculum Vitae", "Resume")}
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-4xl md:text-6xl"
          >
            {t("Mon ", "My ")}
            <span className="text-gradient-primary">{t("parcours", "journey")}</span>.
          </motion.h2>

          <motion.a
            href="/cv/BELMEKKI_IMAD_CV.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-widest rounded-full glow-primary transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            {t("Télécharger le CV", "Download CV")}
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                {t("Expériences", "Experience")}
              </h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{t("Février — Mars", "February — March")}</p>
                <h4 className="font-display font-bold text-foreground mt-1">Esallia</h4>
                <p className="text-sm text-primary font-body">{t("Vendeur Produits Engagés", "Ethical Products Salesperson")}</p>
                <p className="text-sm text-muted-foreground font-body mt-1">{t("Conseil clientèle, gestion de caisse et mise en valeur produits.", "Customer advising, cash management and product display.")}</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{t("Juillet — Août 2025", "July — August 2025")}</p>
                <h4 className="font-display font-bold text-foreground mt-1">Corbeil Auto École</h4>
                <p className="text-sm text-primary font-body">{t("Réceptionnaire", "Receptionist")}</p>
                <p className="text-sm text-muted-foreground font-body mt-1">{t("Réception, inscription des candidats et suivi du planning.", "Reception, candidate registration and schedule management.")}</p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-glow-secondary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-glow-secondary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                {t("Formations", "Education")}
              </h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-glow-secondary/30 pl-4">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">2025 — 2028</p>
                <h4 className="font-display font-bold text-foreground mt-1">BUT MMI</h4>
                <p className="text-sm text-glow-secondary font-body">IUT de Sénart Fontainebleau (UPEC)</p>
                <p className="text-sm text-muted-foreground font-body mt-1">{t("Métiers du Multimédia et de l'Internet", "Multimedia and Internet Professions")}</p>
              </div>
              <div className="border-l-2 border-glow-secondary/30 pl-4">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">2022 — 2025</p>
                <h4 className="font-display font-bold text-foreground mt-1">{t("Baccalauréat STMG", "STMG Baccalaureate")}</h4>
                <p className="text-sm text-glow-secondary font-body">Lycée Robert Doisneau</p>
                <p className="text-sm text-muted-foreground font-body mt-1">Corbeil-Essonnes</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                {t("Compétences", "Skills")}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Illustrator", "InDesign", "Photoshop", "Premiere Pro", "HTML/CSS", "JavaScript", "PHP", "Figma"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-full border border-border bg-surface-elevated text-xs font-body text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                {t("Langues", "Languages")}
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-foreground">{t("Français", "French")}</span>
                <span className="text-xs font-body text-primary">{t("Natif", "Native")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-foreground">{t("Anglais", "English")}</span>
                <span className="text-xs font-body text-muted-foreground">B2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-foreground">{t("Arabe", "Arabic")}</span>
                <span className="text-xs font-body text-muted-foreground">{t("Dialectal", "Dialectal")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CV;
