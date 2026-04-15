import React from "react";
import { Download, ArrowUpRight, Database, BarChart3 } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Intro: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16 pt-32 pb-16 px-4"
    >
      {/* Background Typography */}
      <div className="absolute top-20 left-0 text-[10vw] font-bold text-slate-100 dark:text-slate-900/40 -z-10 select-none pointer-events-none hidden md:block">
        BACKEND <br />
        FRONTEND <br />
        ETL
      </div>

      {/* Left Content */}
      <div className="flex-1 space-y-8 z-10 text-center lg:text-left w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Based in Nigeria • Remote Friendly
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-[1.1]">
          Building <span className="text-emerald-500 italic">Robust</span> Web
          Apps & <span className="text-emerald-500 italic">Smarter</span> Data
          Systems.
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Transforming messy data into clean, automated, and insightful systems.
          Specialized in delivering
          <span className="text-slate-900 dark:text-slate-200 font-semibold underline decoration-emerald-500/40">
            {" "}
            high-performance applications
          </span>{" "}
          and
          <span className="text-slate-900 dark:text-slate-200 font-semibold underline decoration-emerald-500/40">
            {" "}
            end-to-end business automation
          </span>
          .
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="w-full sm:w-auto group px-8 py-4 bg-slate-900 dark:bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white font-bold rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2">
            View Projects{" "}
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
          <a
            href="/se_Azeez_Monsur.pdf"
            download="Azeez_Monsur_CV.pdf"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            Download CV <Download size={20} />
          </a>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-400">
          <a
            href="https://www.linkedin.com/in/monsur-azeez-0b29588b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              className="hover:text-emerald-500 transition-colors"
              size={24}
            />
          </a>
          <a
            href="https://github.com/azmonsur"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className="hover:text-emerald-500 transition-colors"
              size={24}
            />
          </a>
          <a
            href="https://twitter.com/KennyOniyi"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter
              className="hover:text-emerald-500 transition-colors"
              size={24}
            />
          </a>
          <a
            href="https://www.instagram.com/monsur.azeez/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram
              className="hover:text-emerald-500 transition-colors"
              size={24}
            />
          </a>
        </div>
      </div>

      {/* Right Visual - Optimized for Mobile visibility */}
      <div className="flex-1 w-full max-w-[320px] md:max-w-md relative mt-12 lg:mt-0">
        <div className="relative aspect-square w-full">
          {/* Decorative Background Layer */}
          <div className="absolute inset-0 bg-emerald-500 rounded-[3rem] rotate-6" />

          {/* Image Container */}
          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-[3rem] overflow-hidden border-4 md:border-8 border-white dark:border-slate-950 shadow-2xl z-10">
            <img
              src="/kenny3.png"
              alt="Monsur Azeez"
              className="w-full h-full object-cover object-tp grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Widget 1: Automation */}
          <div className="absolute -top-6 -right-4 md:-right-8 p-3 md:p-5 bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex flex-col items-center animate-bounce">
            <BarChart3 className="text-emerald-500 mb-1" size={24} />
            <span className="text-[8px] md:text-[10px] text-slate-400 uppercase font-black tracking-widest">
              Automation
            </span>
            <span className="text-sm md:text-xl font-bold dark:text-white whitespace-nowrap">
              94% Faster
            </span>
          </div>

          {/* Widget 2: Data Pipelines */}
          <div className="absolute -bottom-6 -left-4 md:-left-12 p-3 md:p-4 bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
              <Database size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] text-slate-400 uppercase font-black">
                Data Pipelines
              </span>
              <span className="text-xs md:text-sm font-bold dark:text-white whitespace-nowrap">
                Robust & Clean
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
