import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: "Advanced", highlight: true },
      { name: "React", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "HTML5 / Semantic Web", level: "Proficient" },
      { name: "CSS3 / Modern CSS", level: "Proficient" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "PHP", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate", highlight: true },
      { name: "RESTful API Design", level: "Advanced", highlight: true },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate", highlight: true },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Advanced", highlight: true },
      { name: "GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate", highlight: true },
      { name: "Postman", level: "Advanced" },
      { name: "VS Code", level: "Proficient" },
    ],
  },
];
