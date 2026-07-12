import type { FC } from 'react';

interface SkillPillProps {
  skill: string;
}

export const SkillPill: FC<SkillPillProps> = ({ skill }) => {
  const requirementClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'bg-violet-500/10',
    'px-4',
    'py-2',
    'text-sm',
    'font-semibold',
    'text-violet-300',
  ].join(' ');
  return <span className={requirementClasses}>{skill}</span>;
};
