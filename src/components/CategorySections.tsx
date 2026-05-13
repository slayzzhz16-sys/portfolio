import { motion } from "framer-motion";

import { Project, toolLabels } from "@/data/projects";
import { useLang } from "@/contexts/LangContext";

const toolToLabel = (tool: Project["tools"][number]) => toolLabels[tool] ?? tool;

const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <p className="text-primary/90 font-body text-sm tracking-[0.35em] uppercase mb-6">
        {eyebrow}
      </p>
      <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
        {title}
      </h2>
    </motion.div>
  );
};

const ProjectEditorialRow = ({
  project,
  align,
  variant,
}: {
  project: Project;
  align: "left" | "right";
  variant: "graphisme" | "audiovisuel" | "sae";
}) => {
  const { t } = useLang();

  const media = project.media[0];
  const hasVideo = project.media.some((m) => m.type === "video");

  const leftCol = (
    <div className="min-h-[320px]">
      <div className="relative w-full overflow-hidden rounded-3xl border border-border/30 bg-card/40">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute -top-56 -left-56 w-[32rem] h-[32rem] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-56 -right-56 w-[32rem] h-[32rem] rounded-full bg-accent/15 blur-3xl" />
        </div>

        {/* media */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[420px] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-background/10 via-background/0 to-transparent" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-70" />

          {hasVideo && media?.type === "video" ? (
            <video
              src={media.src}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-contain bg-black rounded-2xl"
            />
          ) : (
            <img
              src={project.cover}
              alt={t(project.titleFr, project.titleEn)}
              className="absolute inset-0 w-full h-full object-contain opacity-100"
              loading="lazy"
            />
          )}
        </div>


        {/* subtle tech corner pills */}
        <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2 px-1">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full text-[10px] md:text-xs font-body uppercase tracking-[0.22em] border border-border/40 bg-background/30 backdrop-blur-sm"
            >
              {toolToLabel(tool)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const year = variant === "graphisme" ? "2026" : variant === "audiovisuel" ? "2026" : "2026";
  const role =
    variant === "graphisme"
      ? t("Rôle", "Role")
      : variant === "audiovisuel"
        ? t("Réalisation", "Direction")
        : t("Conception", "Design");

  const rightCol = (
    <div className="lg:pl-10 xl:pl-14">
      <div className="flex flex-col justify-center h-full">
        <p className="text-muted-foreground font-body text-xs md:text-sm uppercase tracking-[0.25em]">
          {project.category}
          {project.subCategory ? ` · ${project.subCategory}` : ""}
        </p>

        <h3 className="mt-5 font-display font-extrabold text-3xl md:text-4xl leading-tight text-foreground">
          {t(project.titleFr, project.titleEn)}
        </h3>

        <p className="mt-5 text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-xl">
          {t(project.descFr, project.descEn)}
        </p>

        {/* Tools + year + role */}
        <div className="mt-7 grid sm:grid-cols-2 gap-4">
          <div className="pt-3 border-t border-border/40">
            <p className="text-[10px] font-body uppercase tracking-[0.25em] text-muted-foreground">
              {t("OUTILS", "TOOLS")}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.slice(0, 4).map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full text-[10px] font-body uppercase tracking-[0.18em] border border-border/35 bg-background/20 text-muted-foreground"
                >
                  {toolToLabel(tool)}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-border/40">
            <p className="text-[10px] font-body uppercase tracking-[0.25em] text-muted-foreground">
              {t("ANNÉE", "YEAR")}
            </p>
            <p className="mt-2 font-display font-extrabold text-xl text-foreground">{year}</p>

            <p className="text-[10px] mt-4 font-body uppercase tracking-[0.25em] text-muted-foreground">
              {t("RÔLE", "ROLE")}
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-body">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, margin: "-120px" }}
      className="relative"
    >
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-0 items-stretch">
        {align === "left" ? (
          <>
            {leftCol}
            {rightCol}
          </>
        ) : (
          <>
            {rightCol}
            {leftCol}
          </>
        )}
      </div>
    </motion.div>
  );
};

export const CategorySections = ({
  graphe,
  audio,
  sae,
}: {
  graphe: Project[];
  audio: Project[];
  sae: Project[];
}) => {
  const { t } = useLang();

  return (
    <div className="space-y-24">
      <section>
        <SectionTitle eyebrow="GRAPHISME" title={t("Graphisme", "Graphisme")} />
        <div className="space-y-16">
          {graphe.map((p, idx) => (
            <ProjectEditorialRow
              key={p.slug}
              project={p}
              variant="graphisme"
              align={idx % 2 === 1 ? "right" : "left"}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="AUDIOVISUEL" title={t("Audiovisuel", "Audiovisuel")} />
        <div className="space-y-16">
          {audio.map((p) => (
            <ProjectEditorialRow key={p.slug} project={p} variant="audiovisuel" align="left" />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="SAE / PROJET UNIVERSITAIRE"
          title={t("SAE / Projet Universitaire", "SAE / University Project")}
        />
        <div className="space-y-16">
          {sae.map((p, idx) => (
            <ProjectEditorialRow
              key={p.slug}
              project={p}
              variant="sae"
              align={idx % 2 === 1 ? "right" : "left"}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

