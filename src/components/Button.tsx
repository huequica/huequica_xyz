import type { FC, PropsWithChildren } from 'react';

interface ButtonProps {
  href: string;
  external?: boolean;
  additionalClassName?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  href,
  children,
  external = false,
  additionalClassName = '',
}) => {
  const requirementClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'bg-violet-500',
    'px-6',
    'py-3',
    'text-sm',
    'font-semibold',
    'text-white',
    'transition',
    'hover:bg-violet-400',
  ].join(' ');
  return (
    <a
      href={href}
      className={`${requirementClasses} ${additionalClassName}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
};
