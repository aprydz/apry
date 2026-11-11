"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon = false,
  href,
  external = false,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-medium transition-all duration-300 rounded-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 gap-1.5 text-[11px]",
    md: "px-6 py-3 gap-2 text-xs",
    lg: "px-8 py-4 gap-2.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-neutral-200 shadow-sm active:scale-[0.98]",
    secondary:
      "bg-card text-foreground border border-border hover:border-muted hover:bg-card-hover active:scale-[0.98]",
    outline:
      "bg-transparent text-foreground border border-border hover:border-white hover:text-white active:scale-[0.98]",
    ghost:
      "bg-transparent text-muted hover:text-foreground hover:bg-card/50",
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      suppressHydrationWarning
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
};

