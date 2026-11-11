"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8",
        isScrolled
          ? "bg-[#101010]/85 backdrop-blur-md border-b border-border/80 py-3.5 shadow-xl shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Developer identity */}
        <a
          href="#"
          className="group flex items-center gap-3 font-heading font-medium tracking-tight text-foreground"
        >
          <div className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center font-mono text-xs text-white group-hover:border-white transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white">
              Apriyadi
            </span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-card/70 border border-border rounded-full p-1.5 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200",
                  isActive
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-muted hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Availability badge */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/40 text-[11px] font-mono text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Hire</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-xl border border-border bg-card text-muted hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile navigation overlay dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-border/80">
            <span className="font-mono text-xs text-muted uppercase tracking-wider">
              Navigation
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Hire
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl font-mono text-sm text-foreground hover:bg-white/5 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors mt-2"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};

