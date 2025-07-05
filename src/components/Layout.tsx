import * as React from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

export function Layout({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("relative min-h-screen flex flex-col", className)}>
      {/* Background gradient and glass effect */}
      <div className="fixed inset-0 z-0 h-full w-full bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      {/* Main content */}
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
} 