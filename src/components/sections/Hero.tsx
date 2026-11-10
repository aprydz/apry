"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Code2 } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden bg-editorial-grid">
      {/* Decorative architectural circular outlines per PRD Section 5 */}
      <div className="circular-outline w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] lg:w-[680px] lg:h-[680px] -top-24 -right-24 md:-right-12 opacity-30" />
      <div className="circular-outline w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] top-1/2 -left-28 opacity-20" />

      {/* Ambient glow accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-light">
            Full-Stack Developer • Personal Portfolio
          </span>
        </motion.div>

        {/* Oversized Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white uppercase leading-[0.92]">
            Full-Stack <br />
            <span className="text-white/40 font-normal hover:text-white transition-colors duration-500">
              Developer
            </span>
          </h1>
        </motion.div>

        {/* Editorial Subtitle & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12"
        >
          <div className="md:col-span-7">
            <p className="text-lg sm:text-xl text-muted font-body leading-relaxed max-w-2xl">
              I build modern, scalable, and user-friendly digital experiences through clean code
              and thoughtful engineering. Specializing in high-performance web systems with
              Next.js, TypeScript, Node.js, and modern databases.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:items-end gap-4">
            <div className="font-mono text-xs text-muted/80 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white/70" />
              <span>Jakarta, ID (UTC+7)</span>
            </div>
            <SocialLinks variant="badges" />
          </div>
        </motion.div>

        {/* Action CTAs & Key Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-border/80"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary" size="lg" icon>
              Explore Projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>

          <div className="sm:ml-auto flex items-center gap-6 pt-4 sm:pt-0 font-mono text-xs text-muted border-t sm:border-t-0 border-border/50">
            <div>
              <span className="block font-heading text-lg font-bold text-white">3+</span>
              <span className="text-[11px] text-muted">Years Experience</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <span className="block font-heading text-lg font-bold text-white">15+</span>
              <span className="text-[11px] text-muted">Completed Projects</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <span className="block font-heading text-lg font-bold text-white">100%</span>
              <span className="text-[11px] text-muted">Commitment</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle scroll down cue */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted/60 animate-bounce">
        <span>Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </div>
    </section>
  );
};
