import React, { useState, useRef } from "react";
import { Send, MessageSquare, Mail, ExternalLink } from "lucide-react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Add your EmailJS or backend logic here
    setTimeout(() => {
      setIsSending(false);
      alert("Message sent successfully!");
      formRef.current?.reset();
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp size={24} />,
      title: "WhatsApp",
      value: "+234 813 232 9187",
      link: "https://api.whatsapp.com/send?phone=2348132329187",
      color: "text-green-500",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "monsur.koa@gmail.com",
      link: "mailto:monsur.koa@gmail.com",
      color: "text-emerald-500",
    },
    {
      icon: <FaFacebookMessenger size={24} />,
      title: "Messenger",
      value: "azeezmonsur",
      link: "https://m.me/don.kennie1",
      color: "text-blue-500",
    },
  ];

  return (
    <div className="py-12">
      <div className="mb-16 text-center lg:text-left">
        <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">
          Get In Touch
        </h3>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
          Let’s build something{" "}
          <span className="text-emerald-500 italic">extraordinary.</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-2 space-y-6">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5"
            >
              <div className="flex items-center gap-5">
                <div
                  className={`p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 ${method.color} group-hover:scale-110 transition-transform`}
                >
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">
                    {method.title}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-100 font-bold">
                    {method.value}
                  </p>
                </div>
              </div>
              <ExternalLink
                size={18}
                className="text-slate-300 group-hover:text-emerald-500 transition-colors"
              />
            </a>
          ))}

          <div className="p-8 bg-emerald-500 rounded-[2.5rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:rotate-12 transition-transform">
              <MessageSquare size={120} />
            </div>
            <h4 className="text-2xl font-serif font-bold mb-2 relative z-10">
              Have a specific project?
            </h4>
            <p className="text-emerald-100 text-sm mb-0 relative z-10">
              I am currently available for freelance work and consulting.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-[3rem] shadow-2xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Project Inquiry"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">
                Message
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your data or backend needs..."
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white transition-all resize-none"
              ></textarea>
            </div>
            <button
              disabled={isSending}
              className="w-full py-5 bg-slate-900 dark:bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
