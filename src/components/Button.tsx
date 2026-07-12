export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  external = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
