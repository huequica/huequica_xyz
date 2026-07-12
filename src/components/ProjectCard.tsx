import type { FC } from 'react';

export interface Project {
  name: string;
  description: string;
  type: string;
  url: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="rounded-[1.25rem] bg-white/5 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          {project.type}
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-white">
          {project.name}
        </h3>
        <p className="mt-3 text-slate-300 leading-7">{project.description}</p>
      </div>
      <a
        className="mt-6 inline-block text-sm font-semibold text-slate-100 hover:text-white"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        View project →
      </a>
    </article>
  );
};
