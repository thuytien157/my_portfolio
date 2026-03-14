import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cập nhật href khớp với ID bên App.jsx
  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("work"), href: "#work" },
    { name: t("experience"), href: "#experience" },
  ];

  // Hàm xử lý cuộn mượt (Smooth Scroll)
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80, // Trừ hao khoảng cách của Navbar
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Đóng menu mobile sau khi bấm
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled 
            ? isDark 
              ? "bg-[#0a0c10]/80 backdrop-blur-md border-b border-white/5 py-4" 
              : "bg-white/80 backdrop-blur-md border-b border-black/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="text-[#4fd1c5] font-black text-[22px] md:text-[24px] tracking-tighter select-none z-[110]">
          TIEEN
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`transition-all text-[11px] font-bold uppercase tracking-[0.2em] font-mono ${
                isDark ? "text-slate-500 hover:text-[#4fd1c5]" : "text-slate-400 hover:text-black"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="flex gap-2 items-center z-[110]">
          <button
            onClick={toggleTheme}
            className={`p-2 transition-all duration-300 border rounded-sm ${
              isDark ? "bg-[#0a0c10] border-slate-800 text-slate-500" : "bg-white border-gray-200 text-gray-400"
            }`}
          >
            {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
          </button>

          <button
            onClick={toggleLang}
            className={`flex items-center gap-2 px-3 md:py-1 py-2 transition-all duration-300 border rounded-sm ${
              isDark ? "bg-[#0a0c10] border-slate-800 text-slate-500" : "bg-white border-gray-200 text-gray-400"
            }`}
          >
            <Globe size={18} strokeWidth={1.5} />
            <span className="hidden sm:inline text-[11px] font-bold font-mono tracking-widest uppercase">{lang}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-all border rounded-sm ${
              isDark ? "bg-[#0a0c10] border-slate-800 text-[#4fd1c5]" : "bg-white border-gray-200 text-slate-600"
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 w-[80%] h-screen pt-24 px-8 md:hidden flex flex-col gap-6 shadow-2xl z-[105] ${
                isDark ? "bg-[#0a0c10] border-l border-white/5" : "bg-white border-l border-black/5"
              }`}
            >
              <div className="absolute inset-0 backdrop-blur-xl -z-10" />

              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-3xl font-black uppercase tracking-tighter border-b py-4 ${
                    isDark ? "border-white/5 text-white" : "border-black/5 text-slate-900"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}