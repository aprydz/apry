"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#0d0d0d] pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center font-mono text-xs text-white">
                A
              </div>
              <span className="font-heading text-lg font-semibold tracking-tight text-white">
                Apriyadi
              </span>
            </div>
            <p className="text-sm text-muted max-w-md font-body leading-relaxed">
              Full-Stack Developer focused on building modern, robust, and intuitive digital
              experiences with clean code and meticulous attention to detail.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted/70">
                <span>Based in Indonesia</span>
                <span>•</span>
                <span>UTC+7</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-white uppercase tracking-wider block mb-4 font-semibold">
              Index
            </span>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-muted hover:text-white transition-colors">
                  // 01. About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted hover:text-white transition-colors">
                  // 02. Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted hover:text-white transition-colors">
                  // 03. Technical Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted hover:text-white transition-colors">
                  // 04. Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted hover:text-white transition-colors">
                  // 05. Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs text-white uppercase tracking-wider block mb-4 font-semibold">
              Connect
            </span>
            <SocialLinks variant="footer" className="flex-col !items-start gap-3" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} Apriyadi. All rights reserved.</span>
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card hover:bg-card-hover hover:border-white/30 text-muted hover:text-white transition-all duration-200"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
