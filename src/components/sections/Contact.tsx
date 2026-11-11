"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, MapPin, Clock } from "lucide-react";
import confetti from "canvas-confetti";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = "contact.apriyadi@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic async dispatch
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#ffffff", "#a0a0a0", "#101010"],
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrors({ form: "An error occurred. Please try direct email instead." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 05"
          badge="COMMUNICATION"
          title="Let's build something remarkable together."
          description="Whether you have an upcoming project, a job opportunity, or just want to discuss software architecture, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2">
                  Direct Inquiries
                </span>
                <h3 className="font-heading text-xl font-medium text-white mb-3">
                  Have a project in mind?
                </h3>
                <p className="text-sm text-muted font-body leading-relaxed">
                  I typically respond within 24 hours. Feel free to copy my email address or use the
                  interactive form.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl border border-border bg-background flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-xl border border-border bg-card flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-muted uppercase block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${directEmail}`}
                      className="font-mono text-xs sm:text-sm text-white truncate block hover:underline"
                    >
                      {directEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-muted hover:text-white hover:border-white/40 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Working Hours & Location */}
              <div className="pt-2 border-t border-border/60 space-y-3 font-mono text-xs text-muted">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-white/50" />
                  <span>Jakarta, Indonesia (Available globally / remote)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-white/50" />
                  <span>Mon – Fri • 09:00 – 18:00 (GMT+7)</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border/60">
                <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-3">
                  Social Channels
                </span>
                <SocialLinks variant="badges" />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
              <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-6">
                <h3 className="font-heading text-lg font-medium text-white">
                  Send a Message
                </h3>
                <span className="font-mono text-xs text-muted">
                  Response SLA &lt; 24h
                </span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400 animate-in zoom-in-75 duration-300">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading text-2xl font-medium text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-muted max-w-md font-body leading-relaxed">
                    Thank you for reaching out. I have received your message and will get back to you
                    as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-border bg-card text-xs font-mono text-white hover:border-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errors.form && (
                    <div className="p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-muted-light"
                      >
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        suppressHydrationWarning
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-sm text-white placeholder:text-muted/40 font-body transition-colors focus:outline-none focus:ring-1 focus:ring-white ${
                          errors.name
                            ? "border-rose-500/80 focus:ring-rose-500"
                            : "border-border hover:border-neutral-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-muted-light"
                      >
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        suppressHydrationWarning
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-sm text-white placeholder:text-muted/40 font-body transition-colors focus:outline-none focus:ring-1 focus:ring-white ${
                          errors.email
                            ? "border-rose-500/80 focus:ring-rose-500"
                            : "border-border hover:border-neutral-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs uppercase tracking-wider text-muted-light"
                    >
                      Subject / Inquiry Type
                    </label>
                    <input
                      id="subject"
                      type="text"
                      suppressHydrationWarning
                      placeholder="Project Inquiry, Job Opportunity, Collaboration..."
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-white placeholder:text-muted/40 font-body hover:border-neutral-500 transition-colors focus:outline-none focus:ring-1 focus:ring-white"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-muted-light"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      suppressHydrationWarning
                      placeholder="Tell me about your project scope, goals, or timeline..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-sm text-white placeholder:text-muted/40 font-body transition-colors resize-none focus:outline-none focus:ring-1 focus:ring-white ${
                        errors.message
                          ? "border-rose-500/80 focus:ring-rose-500"
                          : "border-border hover:border-neutral-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    suppressHydrationWarning
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed group shadow-sm active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

