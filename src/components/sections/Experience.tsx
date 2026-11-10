"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-8 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 04"
          badge="TRAJECTORY"
          title="Work Experience & Engineering Roles"
          description="A timeline of my professional roles, engineering contributions, and collaborative project accomplishments."
        />

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="rounded-3xl border border-border bg-card p-6 sm:p-10 hover:border-neutral-500 hover:bg-card-hover transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border/70 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="font-mono text-xs text-white/50">
                      // 0{index + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full border border-border bg-background text-[11px] font-mono text-muted">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white group-hover:text-white transition-colors">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-muted">
                    <span className="font-medium text-neutral-300 font-body">
                      {exp.company}
                    </span>
                    {exp.location && (
                      <>
                        <span className="text-border-strong">•</span>
                        <span className="flex items-center gap-1 font-mono text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-muted/80 self-start lg:self-center px-3.5 py-2 rounded-xl border border-border/50 bg-background/50">
                  <Calendar className="w-3.5 h-3.5 text-white/60" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 mb-8">
                {exp.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0 group-hover:bg-white transition-colors" />
                    <p className="text-sm sm:text-base text-muted font-body leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies used */}
              <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-muted/60 mr-2">
                  Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-background text-muted-light border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
