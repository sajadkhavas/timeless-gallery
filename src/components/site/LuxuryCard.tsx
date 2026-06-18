import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function LuxuryCard({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "hairline bg-background/40 p-6 transition-colors hover:bg-[oklch(0.18_0.003_60)]",
        className,
      )}
      {...props}
    />
  );
}
