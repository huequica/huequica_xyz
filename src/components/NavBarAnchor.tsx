import type { FC } from 'react';

type NavBarAnchorProps = {
  href: string;
  label: string;
};

export const NavBarAnchor: FC<NavBarAnchorProps> = ({ href, label }) => {
  return (
    <a
      className="text-sm text-slate-300 transition hover:text-slate-100 focus-visible:text-slate-100"
      href={href}
    >
      {label}
    </a>
  );
};
