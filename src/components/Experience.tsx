import React from "react";
import { Terminal, Database, Layout, Layers } from "lucide-react";
import type { Skill } from "../types/portfolio";

const skills: Skill[] = [
  { id: 1, name: "React / TS", level: "Experienced", category: "Frontend" },
  { id: 61, name: "Zustand", level: "Intermediate", category: "Frontend" },
  { id: 62, name: "Redux", level: "Experienced", category: "Frontend" },
  { id: 4, name: "Tailwind CSS", level: "Experienced", category: "Frontend" },
  {
    id: 8,
    name: "Node.js / NestJS",
    level: "Experienced",
    category: "Backend",
  },
  {
    id: 15,
    name: "MongoDB",
    level: "Experienced",
    category: "Backend",
  },
  {
    id: 30,
    name: "Redis",
    level: "Experienced",
    category: "Backend",
  },
  {
    id: 31,
    name: "PostgreSQL",
    level: "Experienced",
    category: "Backend",
  },
  {
    id: 32,
    name: "Prisma",
    level: "Experienced",
    category: "Backend",
  },
  {
    id: 7,
    name: "SQL Server / SSIS / SSRS / SSAS",
    level: "Experienced",
    category: "General Data",
  },
  {
    id: 10,
    name: "Pandas / NumPy",
    level: "Experienced",
    category: "General Data",
  },
  {
    id: 101,
    name: "ETL",
    level: "Intermediate",
    category: "General Data",
  },
  {
    id: 11,
    name: "Power BI",
    level: "Experienced",
    category: "General Data",
  },
  {
    id: 14,
    name: "Scikit-Learn",
    level: "Intermediate",
    category: "General Data",
  },
];

const Experience: React.FC = () => {
  const categories = [
    { title: "Frontend", icon: <Layout size={20} />, class: "md:col-span-1" },
    { title: "Backend", icon: <Terminal size={20} />, class: "md:col-span-1" },
    {
      title: "General Data",
      icon: <Database size={20} />,
      class: "md:col-span-1",
    },
  ];

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">
            Technical Stack
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
            Tools I use to build{" "}
            <span className="text-emerald-500 italic">solutions.</span>
          </h2>
        </div>
        <div className="hidden lg:block">
          <Layers size={48} className="text-slate-200 dark:text-slate-800" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="group relative p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-bold dark:text-white">
                  {cat.title}
                </h4>
              </div>

              <div className="space-y-5">
                {skills
                  .filter((s) => s.category.includes(cat.title))
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="flex flex-col gap-1 group/skill"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 dark:text-slate-300 font-semibold group-hover/skill:text-emerald-500 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-emerald-500 rounded-full transition-all duration-1000 ${
                            skill.level === "Experienced"
                              ? "w-[90%]"
                              : "w-[65%]"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
