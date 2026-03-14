import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext"; // Import context
import { useLang } from "../context/LanguageContext"; // Import context

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLang();

  const navLinks = [
    { name: t("home"), href: "#" },
    { name: t("about"), href: "#" },
    { name: t("work"), href: "#" },
    { name: t("experience"), href: "#" },
    { name: t("contact"), href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-transparent">
      <div className="text-[#4fd1c5] font-bold text-xl tracking-tighter">
        TIEEN
      </div>
      
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-gray-400 hover:text-[#4fd1c5] transition-colors text-sm font-mono uppercase"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <button 
          onClick={toggleTheme}
          className="text-gray-400 p-2 border border-gray-800 rounded hover:text-[#4fd1c5] transition-all"
        >
          {isDark ? "🌙" : "☀️"}
        </button>

        <button 
          onClick={toggleLang}
          className="text-gray-400 text-xs border border-gray-800 px-2 py-1 rounded flex items-center gap-1 hover:bg-white/5 transition-all"
        >
           <span className="opacity-50">🌐</span> {lang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}