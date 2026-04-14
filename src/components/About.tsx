import React from "react";
import { CheckCircle2, Zap, ShieldCheck, Target } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    { icon: <Zap size={20} />, text: "Automated Workflows" },
    { icon: <ShieldCheck size={20} />, text: "Data Accuracy" },
    { icon: <Target size={20} />, text: "Actionable Insights" },
    { icon: <CheckCircle2 size={20} />, text: "Scalable Systems" },
  ];

  return (
    <div className="relative py-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: The "Identity" Column */}
        <div className="relative">
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em]">
              My Mission
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              Transforming{" "}
              <span className="text-emerald-500 italic">Complexity</span> into
              Clarity.
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              I help businesses make smarter and faster decisions by
              transforming messy data into clean, automated, and insightful
              systems.
            </p>
          </div>

          {/* Decorative zigzag element inspired by image_0.png */}
          <div className="absolute -bottom-12 -left-8 opacity-20 dark:opacity-40">
            <svg
              width="100"
              height="20"
              viewBox="0 0 100 20"
              fill="none"
              className="text-emerald-500"
            >
              <path
                d="M0 10L10 0L20 10L30 0L40 10L50 0L60 10L70 0L80 10L90 0L100 10"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>

        {/* Right Side: Detailed Bio & Core Values */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] relative">
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I build end-to-end reporting, analytics, and backend automation
              solutions using a powerful stack including
              <span className="text-slate-900 dark:text-slate-100 font-semibold">
                {" "}
                Python, SQL, SSIS, and Power BI
              </span>
              on the data side, coupled with{" "}
              <span className="text-slate-900 dark:text-slate-100 font-semibold">
                NestJS, Redis, and RabbitMQ
              </span>{" "}
              for backend resilience.
            </p>
            <p>
              By combining strong backend engineering with deep data expertise,
              I deliver solutions that eliminate manual processes and drive
              meaningful business impact. I’ve supported growing teams in
              building technology systems that actually make work easier.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                <div className="text-emerald-500">{item.icon}</div>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -top-6 -right-6 md:-right-10 bg-slate-900 dark:bg-emerald-500 text-white p-6 rounded-3xl shadow-2xl rotate-12 hover:rotate-0 transition-transform cursor-default">
            <div className="text-3xl font-bold">15+</div>
            <div className="text-[10px] uppercase font-black tracking-tighter opacity-80">
              Years of Code
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
