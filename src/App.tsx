// src/App.tsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import type { NavItem } from "./types/portfolio";

const menuItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Observer to track which section is currently in view for the Navbar highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Detects section when it occupies the upper-middle of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.href.replace("#", ""));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-500">
      {/* Global Background Elements (Inspired by David Franco) 
          These blobs provide a sense of depth and modern professional polish 
      */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-emerald-600/5 dark:bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Layout Wrap */}
      <div className="relative z-10 flex flex-col">
        <Navbar menuItems={menuItems} activeSection={activeSection} />

        <main className="container mx-auto px-6 md:px-12 lg:px-20">
          <section id="home">
            <Intro />
          </section>

          <div className="space-y-32 md:space-y-48 py-20">
            <section id="about">
              <About />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="services">
              <Services />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
