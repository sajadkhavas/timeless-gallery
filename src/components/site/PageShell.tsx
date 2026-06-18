import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main id="main-content" className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageHeader(props: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Array<{ to?: string; label: string }>;
}) {
  return <PageHero {...props} />;
}
