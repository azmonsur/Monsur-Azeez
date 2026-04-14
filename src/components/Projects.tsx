import React, { useState } from "react";
import { ExternalLink, Database, Globe } from "lucide-react";
import type { Project } from "../types/portfolio";

interface GithubIconProps {
  size?: number;
  className?: string;
}

const Github: React.FC<GithubIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-all duration-300 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
};

const projectsData: Project[] = [
  {
    id: 1,
    name: "Laundry Management System",
    desc: "An ERP web-based app for managing laundry's daily activities.",
    img: "lms.png",
    type: "Web Software",
    github_link: "",
    other_link: "https://laundryerp.cyberbridgesoft.com/",
    complete: true,
  },
  {
    id: 2,
    name: "Resume Scanner",
    desc: "AI-powered scanner that parses documents for specific query prompts.",
    img: "resume_scanner.png",
    type: "Web Software",
    github_link: "https://github.com/azmonsur/ResumeScanner",
    other_link: "https://docsscanner.netlify.app/",
    complete: true,
  },
  {
    id: 3,
    name: "Nairaland360",
    desc: "Data science project analyzing extracted data from a forum site.",
    img: "nairaland360.png",
    type: "Data science",
    github_link: "https://github.com/azmonsur/Nairaland360",
    other_link: "",
    complete: true,
  },
  {
    id: 4,
    name: "Outlier Detector",
    desc: "A data science project to detect outliers in a given dataset",
    img: "outlier_detector.jpeg",
    type: "Data Analysis",
    github_link: "https://github.com/azmonsur/Outlier-Detector/tree/master",
    other_link: "",
    complete: true,
  },
  {
    id: 5,
    name: "Chat App",
    desc: "A chatting app built with socket.io and Nodejs",
    img: "chatly.jpeg",
    type: "Web Software",
    github_link: "https://github.com/azmonsur/ChatBean/tree/master",
    other_link: "",
    complete: true,
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Software", "Data science"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === filter);

  return (
    <div className="py-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div className="max-w-xl">
          <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">
            Portfolio
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
            Selected <span className="text-emerald-500 italic">Work.</span>
          </h2>
        </div>

        <div className="flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-white dark:bg-slate-800 text-emerald-500 shadow-sm"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative">
            {/* Project Image Container */}
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-xl relative">
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.other_link && (
                  <a
                    href={project.other_link}
                    target="_blank"
                    className="p-3 bg-emerald-500 rounded-full text-white hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <img
                src={`/${project.img}`}
                alt={project.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Project Info */}
            <div className="mt-6 px-2">
              <div className="flex items-center gap-2 mb-2">
                {project.type.includes("Web") ? (
                  <Globe size={14} className="text-emerald-500" />
                ) : (
                  <Database size={14} className="text-blue-500" />
                )}
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {project.type}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {project.name}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
