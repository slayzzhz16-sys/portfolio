import { Tool, toolLabels } from "@/data/projects";

const ToolBadge = ({ tool }: { tool: Tool }) => (
  <div
    className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/5 px-2.5 py-1.5 font-body"
    title={toolLabels[tool]}
  >
    <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary/15 text-[11px] font-bold text-primary">
      {tool}
    </span>
    <span className="text-xs uppercase tracking-wider text-foreground/80">
      {toolLabels[tool]}
    </span>
  </div>
);

export default ToolBadge;
