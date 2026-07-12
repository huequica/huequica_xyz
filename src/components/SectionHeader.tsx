import type { FC } from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ label, title }) => {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
        {label}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
};
