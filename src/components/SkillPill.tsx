import type { ReactNode } from "react";

export interface SkillPillProps {
  skill: string;
}

export default function SkillPill({ skill }: SkillPillProps) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
      {skill}
    </span>
  );
}
