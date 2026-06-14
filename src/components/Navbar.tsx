import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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
    { href: "#skills", label: t("Compétences", "Skills") },
    { href: "#cv", label: "CV" },
    { href: "#contact", label: "Contact" },
  ];
  const projectLinks = [
    { href: "/projets", label: t("Tous les projets", "All projects") },
    { href: "/projets/graphisme", label: "Graphisme" },
    { href: "/projets/audiovisuel", label: "Audiovisuel" },
    { href: "/projets/sae", label: t("Projet universitaire", "University project") },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding !py-4 md:!py-6 backdrop-blur-xl bg-background/60 border-b border-border/50"
    >
      <a href="#" className="font-display text-xl font-bold text-white">
        Imad<span className="text-white">.</span><span className="text-gradient-primary">B</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {links.slice(0, 1).map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}

        <div className="group relative">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-haspopup="true"
          >
            {t("Projets", "Projects")}
            <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
          </a>

          <div className="invisible absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 translate-y-2 rounded-lg border border-border/60 bg-background/95 p-2 opacity-0 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
            {projectLinks.map((projectLink) => (
              <Link
                key={projectLink.href}
                to={projectLink.href}
                className="block rounded-md px-4 py-3 font-body text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
              >
                {projectLink.label}
              </Link>
            ))}
          </div>
        </div>

        {links.slice(1).map((link) => (
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
