"use client";

import React, { useState, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects";
import { ChevronLeft, ChevronRight, Sparkles, Filter } from "lucide-react";

const CATEGORIES = ["All", "Full-Stack Web Application", "E-Commerce & Inventory", "Creative Engineering", "Productivity SaaS", "Backend Architecture"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-8 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header with Title and Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="// 02"
            badge="PORTFOLIO"
            title="Featured Works & Selected Projects"
            description="A curated selection of real-world web applications, platforms, and distributed systems developed with modern engineering practices."
            className="mb-0"
          />

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous project"
              suppressHydrationWarning
              className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted hover:text-white hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next project"
              suppressHydrationWarning
              className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted hover:text-white hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              suppressHydrationWarning
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeCategory === category
                  ? "bg-white text-black font-medium shadow-sm"
                  : "border border-border bg-card text-muted hover:text-white hover:border-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Horizontal Project Carousel / Grid */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scroll-smooth no-scrollbar"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="w-[90vw] sm:w-[450px] lg:w-[480px] shrink-0 snap-start"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom helper text */}
        <div className="mt-8 flex items-center justify-between font-mono text-xs text-muted/70 pt-4 border-t border-border/50">
          <span>Showing {filteredProjects.length} of {projectsData.length} projects</span>
          <span className="hidden sm:inline">Use arrows or scroll horizontally to browse</span>
        </div>
      </div>
    </section>
  );
};

