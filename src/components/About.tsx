import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";
import photoImad from "@/assets/photo-imad.jpg";

const tools = [
  "Figma", "Photoshop", "Illustrator", "Premiere Pro", "InDesign"
];

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="section-padding bg-noise relative">
      <div className="max-w-4xl mx-auto">
        <div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            {t("À propos", "About me")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]"
          >
            {t("Passionné par le ", "Passionate about ")}
            <span className="text-gradient-primary">{t("digital", "digital")}</span>
            {t(" sous toutes ses formes.", " in all its forms.")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8"
          >
            {t(
              "Étudiant en première année de BUT MMI, je suis un créatif touche-à-tout. Design graphique, montage vidéo, motion design, communication digitale — j'aime explorer, expérimenter et repousser les limites. Quand je ne suis pas sur Figma ou Premiere, je cherche la prochaine idée qui va tout casser.",
              "First-year BUT MMI student, I'm a multi-skilled creative. Graphic design, video editing, motion design, digital communication — I love exploring, experimenting, and pushing boundaries. When I'm not on Figma or Premiere, I'm chasing the next idea that'll break the mold."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full border border-border bg-surface-elevated text-sm font-body text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </motion.div>

          {/* Creative License Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative bg-[hsl(40,30%,92%)] rounded-xl border-2 border-[hsl(40,20%,75%)] shadow-2xl overflow-hidden p-6 md:p-8">
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

              <div className="relative flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-[hsl(0,0%,15%)] tracking-wide uppercase">Creative</h3>
                  <h3 className="font-display font-extrabold text-3xl md:text-4xl text-[hsl(0,0%,15%)] tracking-wide uppercase -mt-1">License</h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[hsl(0,0%,45%)] uppercase tracking-wider font-body"># of License</p>
                  <p className="font-display font-extrabold text-3xl md:text-4xl text-[hsl(220,60%,35%)]">2026</p>
                </div>
              </div>

              <div className="relative grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-6">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-[hsl(40,20%,70%)] shadow-md">
                    <img src={photoImad} alt="Imad Belmekki" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-[hsl(220,60%,35%)] flex items-center justify-center rotate-[-15deg] opacity-60">
                    <div className="text-center">
                      <p className="text-[6px] md:text-[8px] font-display font-bold text-[hsl(220,60%,35%)] uppercase leading-tight">MMI<br/>Student<br/>2026</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="border-b border-[hsl(40,20%,75%)] pb-2">
                    <p className="text-[10px] text-[hsl(0,0%,50%)] uppercase tracking-wider font-body">{t("Signature du créatif autorisé", "Signature of Authorized Creative")}</p>
                    <p className="font-display font-bold text-xl md:text-2xl text-[hsl(220,60%,30%)] italic mt-1" style={{ fontFamily: "'Syne', cursive" }}>Imad Belmekki</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border-b border-[hsl(40,20%,75%)] pb-2">
                      <p className="text-[10px] text-[hsl(0,0%,50%)] uppercase tracking-wider font-body">{t("Prénom", "First Name")}</p>
                      <p className="font-display font-bold text-sm text-[hsl(0,0%,15%)] uppercase">Imad</p>
                    </div>
                    <div className="border-b border-[hsl(40,20%,75%)] pb-2">
                      <p className="text-[10px] text-[hsl(0,0%,50%)] uppercase tracking-wider font-body">{t("Nom", "Last Name")}</p>
                      <p className="font-display font-bold text-sm text-[hsl(0,0%,15%)] uppercase">Belmekki</p>
                    </div>
                  </div>
                  <div className="border-b border-[hsl(40,20%,75%)] pb-2">
                    <p className="text-[10px] text-[hsl(0,0%,50%)] uppercase tracking-wider font-body">Profession</p>
                    <p className="font-display font-bold text-sm text-[hsl(0,0%,15%)]">{t("Étudiant BUT MMI — Créateur Digital", "BUT MMI Student — Digital Creator")}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border-b border-[hsl(40,20%,75%)] pb-2">
                      <p className="text-[10px] text-[hsl(0,0%,50%)] uppercase tracking-wider font-body">Email</p>
                      <a href="mailto:imad.bmk.91@gmail.com" className="font-body font-medium text-xs text-[hsl(220,60%,35%)] hover:underline break-all">imad.bmk.91@gmail.com</a>
                    </div>
                    <div className="border-b border-[hsl(40,20%,75%)] pb-2">
                      <p className="text-[10px] text-[hsl(0,0%,50%)] uppercase tracking-wider font-body">{t("Téléphone", "Phone")}</p>
                      <a href="tel:+33621790261" className="font-body font-medium text-xs text-[hsl(220,60%,35%)] hover:underline">06 21 79 02 61</a>
                    </div>
                  </div>
                  <div className="border-b border-[hsl(40,20%,75%)] pb-2">
                    <p className="text-[10px] text-[hsl(0,0%,50%)] uppercase tracking-wider font-body">{t("Spécialisation", "Specialization")}</p>
                    <p className="font-body font-medium text-xs text-[hsl(0,0%,15%)]">{t("Design Graphique · Audiovisuel · Communication Digitale", "Graphic Design · Audiovisual · Digital Communication")}</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 pt-4 border-t-2 border-[hsl(40,20%,70%)] flex flex-wrap items-center justify-between gap-4">
                <p className="font-display font-extrabold text-xs md:text-sm text-[hsl(0,0%,25%)] uppercase tracking-wider">
                  {t("Créateur Digital", "Digital Creator")} | {t("Étudiant MMI", "MMI Student")}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/imad-belmekki-3802753b0"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-body text-[hsl(0,0%,45%)] underline underline-offset-4 decoration-[hsl(0,0%,45%)] hover:text-[hsl(220,60%,35%)] hover:decoration-[hsl(220,60%,35%)] transition-colors uppercase tracking-wider"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/91.imadd/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-body text-[hsl(0,0%,45%)] underline underline-offset-4 decoration-[hsl(0,0%,45%)] hover:text-[hsl(220,60%,35%)] hover:decoration-[hsl(220,60%,35%)] transition-colors uppercase tracking-wider"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="relative mt-3 flex items-center justify-between">
                <p className="text-[9px] text-[hsl(0,0%,55%)] font-body uppercase tracking-wider">{t("Valide jusqu'à — N'expire pas", "Valid until — Does not expire")}</p>
                <p className="text-[9px] text-[hsl(0,0%,55%)] font-body uppercase tracking-wider font-bold">Creative Status Active</p>
              </div>
            </div>

            <div className="absolute -top-3 right-12 w-8 h-12 border-2 border-[hsl(0,0%,60%)] rounded-full bg-transparent" style={{ borderBottom: 'none', borderRadius: '50% 50% 0 0' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
