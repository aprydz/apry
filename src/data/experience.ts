import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Nexa Digital Studio",
    position: "Full-Stack Developer",
    period: "2023 – Present",
    type: "Full-Time",
    location: "Jakarta, Indonesia (Hybrid)",
    description: [
      "Architected and delivered scalable web applications and enterprise portals using Next.js, Node.js, and PostgreSQL.",
      "Engineered reusable UI component systems and optimized Core Web Vitals, resulting in a 45% reduction in initial page load time.",
      "Spearheaded the integration of RESTful microservices, OAuth2 authentication, and automated payment gateways.",
      "Collaborated closely with cross-functional product teams, UI/UX designers, and stakeholders through agile bi-weekly sprints.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    featured: true,
  },
  {
    id: "exp-2",
    company: "Inovasi Prima Solusindo",
    position: "Web Developer Intern",
    period: "2022 – 2023",
    type: "Internship",
    location: "Bandung, Indonesia",
    description: [
      "Developed and maintained responsive client web dashboards using Laravel, PHP, MySQL, and JavaScript.",
      "Built automated data export pipelines (Excel/PDF) and implemented student & client attendance tracking modules.",
      "Resolved 30+ legacy frontend bugs and updated user interfaces to modern accessible standards.",
      "Created technical documentation and API specifications using Postman for internal developer handoffs.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Git"],
    featured: true,
  },
  {
    id: "exp-3",
    company: "Freelance & Open Source Projects",
    position: "Independent Software Engineer",
    period: "2021 – 2022",
    type: "Freelance / Contract",
    location: "Remote",
    description: [
      "Built custom websites and e-commerce solutions for SME clients with integrated inventory tracking and WhatsApp ordering.",
      "Deployed full-stack prototypes on Vercel and Supabase with zero server downtime.",
      "Conducted SEO optimization, technical auditing, and accessibility enhancements across client deliverables.",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS", "REST API", "Git"],
    featured: false,
  },
];

