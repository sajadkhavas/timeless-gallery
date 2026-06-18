import { Link } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
const styles: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/60",
  secondary:
    "border border-hairline bg-transparent text-foreground hover:border-primary hover:text-primary focus-visible:ring-primary/50",
  ghost:
    "text-foreground/75 underline-offset-8 hover:text-primary hover:underline focus-visible:ring-primary/50",
};

export function LuxuryButton({
  className,
  variant = "primary",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}

export function LuxuryLink({
  children,
  className,
  variant = "primary",
  ...props
}: ComponentPropsWithoutRef<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
