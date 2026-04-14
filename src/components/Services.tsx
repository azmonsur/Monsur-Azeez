import React from "react";
import { Code2, BarChart, Settings, Check } from "lucide-react";
import type { Service } from "../types/portfolio";

const servicesData: Service[] = [
  {
    id: 1,
    name: "Web Development",
    services: [
      "Frontend & Responsive Design",
      "Scalable Backend APIs (NestJS)",
      "Fullstack Web Applications",
      "JavaScript/TypeScript Mentorship",
    ],
  },
  {
    id: 2,
    name: "Data Engineering",
    services: [
      "ETL Pipelines & Warehousing",
      "Web Scraping & Data Extraction",
      "Advanced SQL & Python Analysis",
      "Power BI Dashboard Visualizations",
    ],
  },
  {
    id: 3,
    name: "System Automation",
    services: [
      "Task Automation with Python",
      "Message Queue Systems (RabbitMQ)",
      "Redis Caching & Locking",
    ],
  },
];

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes("Web")) return <Code2 size={32} />;
    if (name.includes("Data")) return <BarChart size={32} />;
    return <Settings size={32} />;
  };

  return (
    <div className="py-12 relative">
      <div className="mb-16">
        <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">
          What I Offer
        </h3>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
          Specialized{" "}
          <span className="text-emerald-500 italic">Solutions.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-lg">
                {getIcon(service.name)}
              </div>

              <h4 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                {service.name}
              </h4>

              <ul className="space-y-4">
                {service.services.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <Check
                      className="text-emerald-500 shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-sm font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
