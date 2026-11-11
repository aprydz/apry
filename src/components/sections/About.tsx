"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, UserCheck } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-8 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 01"
          badge="BIOGRAPHY"
          title="Engineering digital products with purpose, clarity & speed."
          description="A look into my background, engineering philosophy, and the principles that shape my craft as a full-stack developer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Personal Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl border border-border bg-background flex items-center justify-center text-white">
                  <UserCheck className="w-5 h-5 text-neutral-300" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-white">
                    Hello! I&apos;m Apriyadi
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    Full-Stack Software Engineer
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-muted font-body leading-relaxed text-base">
                <p>
                  I am a passionate Full-Stack Developer with hands-on experience in building
                  responsive, accessible, and high-performance web applications. My journey
                  spans frontend architecture with React and Next.js to robust backend systems
                  using Node.js, Express, Laravel, and relational databases.
                </p>
                <p>
                  I thrive at the intersection of aesthetic design and resilient software engineering.
                  I believe clean code is not just about syntax, but about clarity, scalability, and
                  creating products that solve real human problems efficiently.
                </p>
              </div>

              {/* Core Principles */}
              <div className="pt-4 border-t border-border/70 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                      Clean Architecture
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      Modular, maintainable, and strictly typed codebases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                      Performance First
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      Sub-second speeds and optimal Core Web Vitals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                      Modern Aesthetics
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      Subtle animations and minimalist editorial layouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                      End-to-End Ownership
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      From database schemas to UI production deployments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Career Quick Facts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Visual Minimalist Portrait Card */}
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-muted uppercase tracking-wider">
                  Dev Identity // 2024
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
              </div>

              {/* Developer Photographic Portrait & Info */}
              <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl border border-border/80 overflow-hidden group/photo bg-background/90 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Apriyadi - Full-Stack Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top filter grayscale-[25%] contrast-[1.05] group-hover/photo:scale-105 group-hover/photo:grayscale-0 transition-all duration-700 ease-out"
                  priority
                />

                {/* Dark Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/30 to-transparent opacity-90" />

                {/* Top status indicator on photo */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active // Open to Work</span>
                  </div>
                </div>

                {/* Bottom details on photo */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-white drop-shadow-md">
                      Apriyadi
                    </h4>
                    <p className="font-mono text-xs text-neutral-300 mt-0.5 drop-shadow">
                      Full-Stack Engineer &amp; Designer
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-white/60 px-2 py-1 rounded bg-black/50 backdrop-blur-sm border border-white/10">
                    ID // AP-01
                  </span>
                </div>
              </div>

              {/* Career Goal & Interests */}
              <div className="mt-6 space-y-4 pt-4 border-t border-border/70">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                    Career Ambition
                  </span>
                  <p className="text-sm text-foreground/90 font-body">
                    Building robust, mission-critical SaaS products and scalable web infrastructure
                    alongside world-class engineering teams.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                    Personal Interests
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["UI Systems", "API Architecture", "Cloud Computing", "Open Source", "Design Systems"].map(
                      (interest) => (
                        <span
                          key={interest}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-border bg-background text-muted"
                        >
                          {interest}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

