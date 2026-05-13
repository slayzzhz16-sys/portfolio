import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding bg-noise overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-glow-secondary/10 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-glow-accent/10 blur-[80px] animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base font-body tracking-[0.3em] uppercase text-primary mb-6"
        >
          Imad Belmekki — {t("Étudiant en BUT MMI", "BUT MMI Student")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6"
        >
          <span className="text-foreground">{t("Créateur", "Digital")}</span>
          <br />
          <span className="text-gradient-primary">{t("Digital", "Creator")}</span>
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mb-10 leading-relaxed"
        >
          {t(
            "Design graphique · Audiovisuel · Communication digitale · Création web",
            "Graphic Design · Audiovisual · Digital Communication · Web Creation"
          )}
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-widest rounded-full glow-primary transition-all duration-300"
        >
          {t("Voir mes projets", "See my work")} →
        </motion.a>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 overflow-hidden py-4">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-muted-foreground/30 font-display text-xl font-bold uppercase tracking-widest">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex gap-12">
                <span>DESIGN</span>
                <span>•</span>
                <span>VIDÉO</span>
                <span>•</span>
                <span>WEB</span>
                <span>•</span>
                <span>COMMUNICATION</span>
                <span>•</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
