import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  variant?: "minimal" | "badges" | "footer";
  className?: string;
}

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/apriyadi-dev",
    handle: "@apriyadi-dev",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/apriyadi-dev",
    handle: "in/apriyadi-dev",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/apriyadi.tech",
    handle: "@apriyadi.tech",
    icon: InstagramIcon,
  },
  {
    name: "Email",
    url: "mailto:contact.apriyadi@gmail.com",
    handle: "contact.apriyadi@gmail.com",
    icon: Mail,
  },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "minimal",
  className,
}) => {
  if (variant === "badges") {
    return (
      <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-card text-xs font-mono text-muted hover:text-white hover:border-white/40 hover:bg-card-hover transition-all duration-200 group"
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.name}</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={cn("flex flex-wrap gap-4 items-center", className)}>
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors duration-200 font-mono"
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted hover:text-white hover:border-white/40 hover:scale-105 transition-all duration-200"
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};
