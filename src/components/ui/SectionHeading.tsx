import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  description,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-muted",
          align === "center" && "justify-center"
        )}
      >
        {number && <span className="text-white/60 font-semibold">{number}</span>}
        {number && badge && <span className="text-border-strong">•</span>}
        {badge && (
          <span className="px-2.5 py-0.5 rounded-full border border-border bg-card/60 text-[11px] text-muted-light">
            {badge}
          </span>
        )}
      </div>

      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted font-body leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
