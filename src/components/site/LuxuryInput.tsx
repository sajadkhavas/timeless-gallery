import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function LuxuryInput({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={cn(
        "w-full border border-hairline bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary",
        className,
      )}
      {...props}
    />
  );
}
