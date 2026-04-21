import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({ href, children, className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-secondary-400 bg-secondary-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-secondary-300 hover:bg-secondary-500 ${className}`}
    >
      {children}
    </Link>
  );
}
