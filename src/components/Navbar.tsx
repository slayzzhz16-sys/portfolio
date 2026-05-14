import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { lang, toggle, t } = useLang();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = 96;
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    const distance = end - start;
    const duration = 900;
    const startTime = performance.now();

    const easeInOutCubic = (progress: number) =>
      progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start + distance * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        window.history.pushState(null, "", href);
      }
    };

    requestAnimationFrame(animate);
  };

  const links = [
    { href: "#about", label: t("À propos", "About") },
    { href: "#projects", label: t("Projets", "Projects") },
    { href: "#skills", label: t("Compétences", "Skills") },
    { href: "#cv", label: "CV" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding !py-4 md:!py-6 backdrop-blur-xl bg-background/60 border-b border-border/50"
    >
      <a href="#" className="font-display text-xl font-bold text-gradient-primary">
        Imad<span className="text-foreground">.</span>B
      </a>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        onClick={toggle}
        className="px-3 py-1.5 rounded-full border border-primary/50 text-sm font-body font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        {lang === "fr" ? "EN" : "FR"}
      </button>
    </motion.nav>
  );
};

export default Navbar;
