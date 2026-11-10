"use client";

import React from "react";
import { Project } from "@/types";
import { ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <article className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-neutral-500 hover:bg-card-hover overflow-hidden h-full">
      {/* Decorative subtle ambient highlight */}
      <div className="absolute -right-20 -top-20 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-white/[0.05] transition-all duration-500" />

      <div>
        {/* Top meta bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-white/50">
              0{index + 1}
            </span>
            <span className="text-border-strong">•</span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.category}
            </span>
          </div>

          {project.year && (
            <span className="font-mono text-xs text-muted/60 px-2 py-0.5 rounded border border-border/50 bg-background/50">
              {project.year}
            </span>
          )}
        </div>

        {/* Project Visual / Thumbnail Representation */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-2xl border border-border/60 bg-background/80 overflow-hidden flex flex-col justify-between p-4 group-hover:border-neutral-600 transition-colors">
          {/* Mock editorial browser/code frame */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
            </div>
            <span className="font-mono text-[10px] text-muted/70 truncate max-w-[200px]">
              {project.id}.app
            </span>
            <FolderGit2 className="w-3.5 h-3.5 text-muted/50" />
          </div>

          {/* Central graphic */}
          <div className="my-auto flex flex-col items-center justify-center text-center p-2">
            <div className="w-12 h-12 rounded-2xl border border-border bg-card flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 group-hover:border-white/30 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-neutral-300" />
            </div>
            <p className="font-heading font-medium text-sm text-foreground/90">
              {project.title}
            </p>
            {project.role && (
              <span className="text-[11px] font-mono text-muted/80 mt-1">
                {project.role}
              </span>
            )}
          </div>

          {/* Bottom tag preview within frame */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <span className="font-mono text-[10px] text-muted/60">
              Architecture: High Scale
            </span>
            <span className="font-mono text-[10px] text-emerald-400/80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Build
            </span>
          </div>
        </div>

        {/* Project Content */}
        <h3 className="font-heading text-xl sm:text-2xl font-medium text-foreground tracking-tight group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-muted font-body leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech stack tags and Action buttons */}
      <div className="mt-8 pt-6 border-t border-border/80">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-background text-muted-light border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source code for ${project.title}`}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-background text-muted hover:text-white hover:border-neutral-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
