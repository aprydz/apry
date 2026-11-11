"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillsData } from "@/data/skills";
import { Code, Database, Layout, Wrench, CheckCircle, ShieldCheck } from "lucide-react";

export const Skills = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="w-5 h-5 text-neutral-300" />;
      case "Backend":
        return <Code className="w-5 h-5 text-neutral-300" />;
      case "Database":
        return <Database className="w-5 h-5 text-neutral-300" />;
      case "Tools & DevOps":
        return <Wrench className="w-5 h-5 text-neutral-300" />;
      default:
        return <Code className="w-5 h-5 text-neutral-300" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-8 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 03"
          badge="CAPABILITIES"
          title="Technical Stack & Engineering Tooling"
          description="A transparent breakdown of my core technical proficiencies across modern frontend systems, backend architectures, databases, and development tooling."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, groupIdx) => (
            <div
              key={group.category}
              className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between hover:border-neutral-500 hover:bg-card-hover transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl border border-border bg-background flex items-center justify-center">
                      {getCategoryIcon(group.category)}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-medium text-white">
                        {group.category}
                      </h3>
                      <span className="font-mono text-[10px] text-muted uppercase">
                        Stack 0{groupIdx + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill items list */}
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded-xl border border-border/40 bg-background/50 hover:bg-background/80 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 shrink-0" />
                        )}
                        <span className="text-xs font-mono text-foreground font-medium">
                          {skill.name}
                        </span>
                      </div>

                      {skill.level && (
                        <span className="text-[10px] font-mono text-muted/70 px-2 py-0.5 rounded bg-card border border-border/50">
                          {skill.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom footer badge */}
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between font-mono text-[11px] text-muted/70">
                <span>{group.skills.length} Technologies</span>
                <span className="text-white/40">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Development Ethos Note per PRD */}
        <div className="mt-12 rounded-2xl border border-border/70 bg-card/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs sm:text-sm text-muted font-body">
              <strong className="text-white font-medium">Commitment to Competence:</strong> All
              listed skills reflect hands-on production code, continuous testing, and active project
              experience.
            </p>
          </div>
          <span className="font-mono text-xs text-muted/60 whitespace-nowrap">
            Updated // 2024
          </span>
        </div>
      </div>
    </section>
  );
};

