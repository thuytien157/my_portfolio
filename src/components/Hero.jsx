import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";
import { Github, Mail, Send, MapPin, Code2, TelescopeIcon, Copy, Check, Terminal, User, Sparkles } from "lucide-react";

const GlowingOrb = ({ size, color, top, left, delay, scrollYProgress, isDark }) => {
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0px", `${size * 0.4}px`]);
  return (
    <motion.div
      className="absolute rounded-full filter blur-[100px]"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top: `${top}%`,
        left: `${left}%`,
        y: yParallax,
        mixBlendMode: isDark ? "screen" : "overlay",
        opacity: isDark ? 0.25 : 0.4,
      }}
      animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
};

const ContactPill = ({ item, isDark }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    const textToCopy = item.value || item.link;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className={`relative flex items-center gap-3 px-4 py-2 rounded-2xl border transition-all duration-300 ${
        isDark ? "bg-white/[0.03] border-white/10 hover:border-[#4fd1c5]/50" : "bg-white border-black/5 shadow-sm hover:border-[#4fd1c5]"
      }`}
    >
      <a href={item.link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2">
        <span className="text-[#4fd1c5]">{item.icon}</span>
        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "text-white/70" : "text-slate-700"}`}>
          {item.label}
        </span>
      </a>
      
      {item.copyable !== false && (
        <button onClick={handleCopy} className="ml-1 p-1 hover:bg-[#4fd1c5]/10 rounded transition-colors">
          {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="opacity-40" />}
        </button>
      )}

      <AnimatePresence>
        {copied && (
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8px] bg-[#4fd1c5] text-black px-2 py-1 rounded-full font-bold shadow-lg">
            COPIED
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function HeroSection() {
  const { isDark, setIsDark } = useTheme();
  const { t, lang } = useLang(); // Lấy thêm lang để check ngôn ngữ hiện tại
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  useEffect(() => { if (setIsDark) setIsDark(false); }, [setIsDark]);

  const orbs = [
    { size: 500, color: "#93f5ec", top: -5, left: 5, delay: 0 },
    { size: 600, color: "#ffd1ff", top: 25, left: 65, delay: 1 },
    { size: 400, color: "#ffecb3", top: 65, left: 10, delay: 2 },
    { size: 450, color: "#c3dafe", top: 10, left: 80, delay: 0.5 },
  ];

  const techs = [
    { name: "PHP", id: "php" }, { name: "Laravel", id: "laravel" },
    { name: "CodeIgniter", id: "codeigniter" }, { name: "WordPress", id: "wp" },
    { name: "JavaScript", id: "javascript" }, { name: "Node.js", id: "nodejs" },
    { name: "Vue.js", id: "vue" }, { name: "React", id: "react" },
    { name: "MySQL", id: "mysql" }, { name: "PostgreSQL", id: "postgresql" },
    { name: "Tailwind", id: "tailwind" }, { name: "Bootstrap", id: "bootstrap" },
  ];

  const contactInfo = [
    { icon: <Github size={14} />, link: "https://github.com/thuytien157", label: "thuytien157", value: "thuytien157" },
    { icon: <Mail size={14} />, link: "mailto:ntttien.work@gmail.com", label: "Email", value: "ntttien.work@gmail.com" },
    { icon: <Send size={14} />, link: "https://t.me/tieenz_i", label: "Telegram", value: "@tieenz_i" },
    { icon: <TelescopeIcon size={14} />, link: "https://zalo.me/0389330759", label: "Zalo", value: "0389330759" },
    { icon: <MapPin size={14} />, label: "HCMC, VN", copyable: false },
  ];

  return (
    <section ref={ref} className={`relative min-h-screen w-full flex items-center justify-center py-24 overflow-hidden transition-colors duration-1000 ${isDark ? "bg-[#0a0c10]" : "bg-[#fcfcfc]"}`}>
      
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {orbs.map((orb, i) => <GlowingOrb key={i} {...orb} isDark={isDark} scrollYProgress={scrollYProgress} />)}
      </div>

      <div className="relative z-20 max-w-6xl w-full px-6 flex flex-col items-center">
        
        <div className="w-full flex flex-col items-center mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <Sparkles size={18} className="text-[#4fd1c5] animate-pulse" />
            <span className={`text-[10px] font-black uppercase tracking-[0.5em] ${isDark ? "text-white/40" : "text-black/40"}`}>
              {t("subtitle")} Portfolio
            </span>
            <div className="h-[1px] w-12 bg-[#4fd1c5]/30" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-5xl md:text-[90px] font-black tracking-tighter leading-none text-center mb-8 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {t("heroTitle")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4fd1c5] to-[#38b2ac] drop-shadow-sm">
              {t("heroHighlight")}
            </span>
          </motion.h1>
        </div>

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-20 max-w-4xl"
        >
          {contactInfo.map((item, idx) => (
            <ContactPill key={idx} item={item} isDark={isDark} />
          ))}
        </motion.div>

        {/* BOTTOM SECTION: TECH MATRIX */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <div className={`p-1 rounded-[2.5rem] ${isDark ? "bg-gradient-to-b from-white/10 to-transparent" : "bg-gradient-to-b from-black/5 to-transparent shadow-2xl"}`}>
            <div className={`p-8 md:p-10 rounded-[2.4rem] ${isDark ? "bg-[#0d1117]" : "bg-white"}`}>
              <div className="flex items-center gap-4 mb-10">
                <Code2 className="text-[#4fd1c5]" />
                <h2 className={`text-xs font-black uppercase tracking-[0.4em] ${isDark ? "text-white/80" : "text-slate-900"}`}>
                   {t("featured")}
                </h2>
                <div className="flex-1 h-[1px] bg-current opacity-10" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
                {techs.map((tech, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="flex flex-col items-center gap-2 group">
                    <div className={`p-3 rounded-2xl border transition-all duration-300 ${isDark ? "bg-white/[0.02] border-white/5 group-hover:bg-white/[0.08]" : "bg-slate-50 border-black/5 group-hover:bg-white group-hover:shadow-xl"}`}>
                      <img src={`https://skillicons.dev/icons?i=${tech.id}`} className="w-7 h-7 object-contain" alt={tech.name} />
                    </div>
                    <span className={`text-[7px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 ${isDark ? "text-white" : "text-slate-900"}`}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-dashed border-slate-700/20 flex flex-col md:flex-row justify-between items-center gap-4">
                 <div className="flex items-center gap-2 text-[9px] font-black text-[#4fd1c5] tracking-[0.3em]">
                    <User size={12} /> {lang === 'vi' ? 'SẴN SÀNG LÀM VIỆC' : 'AVAILABLE FOR HIRE'}
                 </div>
                 <span className={`text-[9px] font-bold opacity-30 uppercase tracking-[0.5em] ${isDark ? "text-white" : "text-black"}`}>
                    {t("subtitle")}
                 </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}