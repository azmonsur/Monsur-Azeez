import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/monsur-azeez-0b29588b/",
    },
    { icon: <FaGithub size={20} />, href: "https://github.com/azmonsur" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com/KennyOniyi" },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/monsur.azeez/",
    },
    {
      icon: <FaFacebook size={20} />,
      href: "https://web.facebook.com/don.kennie1",
    },
  ];

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-serif text-xl font-bold dark:text-white">
                Monsur Azeez
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
              Data Professional & Backend Architect. <br />
              Based in Nigeria, working globally.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <p>© {currentYear} Monsur Azeez. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
