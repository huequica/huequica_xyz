import type { FC } from 'react';

interface Colors {
  text?: string;
  background?: string;
}
interface SkillPillProps {
  skill: string;
  color?: Colors;
}

export const SkillPill: FC<SkillPillProps> = ({
  skill,
  color = { text: 'text-violet-300', background: 'bg-violet-500/10' },
}) => {
  const requirementClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'px-4',
    'py-2',
    'text-sm',
    'font-semibold',
    color.background,
    color.text,
  ].join(' ');
  return <span className={requirementClasses}>{skill}</span>;
};
