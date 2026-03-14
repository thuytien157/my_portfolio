import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";

const ExperienceCard = ({ exp, index, isDark }) => {
  const colors = ["#4fd1c5", "#ffd1ff", "#ffecb3", "#c3dafe"];
  const accentColor = colors[index % colors.length];
  const cardStyles = isDark
    ? "bg-white/[0.03] border-white/5 group-hover:bg-white/[0.07] text-white"
    : "bg-white/10 border-white/20 group-hover:bg-white/20 text-white shadow-[20px_20px_60px_rgba(0,0,0,0.1)]";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex gap-8 pb-16"
    >
      <div className="flex flex-col items-center">
        <div className={`text-[10px] font-black font-mono px-2 py-1 border-2 transition-all duration-500
          ${isDark 
            ? "border-white/10 text-white/40 group-hover:border-[#4fd1c5] group-hover:text-[#4fd1c5]" 
            : "border-white/40 text-white group-hover:border-white"}`}>
          {exp.year}
        </div>
        <div className={`w-[2px] flex-1 mt-4 bg-current opacity-10`} />
      </div>

      <div className="relative flex-1 cursor-pointer">
        <div className={`relative p-8 transition-all duration-500 border ${cardStyles}`}>
          
          <div 
            className={`absolute top-0 right-0 px-3 py-1 text-[9px] font-black uppercase tracking-widest
            ${isDark ? "bg-[#333] text-white" : "bg-white text-[#002B5B]"}`}
          >
            {exp.company}
          </div>

          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-2">
              {exp.role}
            </h3>
            <div className="h-1 w-12 transition-all duration-500 group-hover:w-24" 
                 style={{ backgroundColor: isDark ? accentColor : "#fff" }} />
          </div>

          <p className={`text-sm leading-relaxed max-w-2xl font-medium ${isDark ? "text-slate-400" : "text-white/80"}`}>
            {exp.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {exp.tech?.map((item, i) => (
              <span key={i} className={`text-[10px] font-bold px-2 py-1 rounded-sm
                ${isDark ? "bg-white/5 text-white/50" : "bg-white/20 text-white"}`}>
                #{item}
              </span>
            ))}
          </div>

          <div className="absolute top-0 right-0 w-3 h-3 bg-white/10" />
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-white/10" />
        </div>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const { isDark } = useTheme();
  const { t } = useLang();
  
  const experiences = t("experienceItems") || [];

  return (
    <section className={`py-24 px-6 md:px-20 transition-colors duration-1000 relative overflow-hidden
      ${isDark ? "bg-[#0a0c10]" : "bg-[#002B5B]"}`}> 

      <div className="absolute left-[-2%] top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden lg:block pointer-events-none">
        <span className={`text-[10rem] font-black uppercase select-none opacity-5 transition-colors 
          ${isDark ? 'text-[#4fd1c5]' : 'text-white'}`}>
          {t("experienceBg")}
        </span>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-24">
          <h2 className={`text-start text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.7]
            ${isDark ? "text-[#4fd1c5]" : "text-white"}`}>
            // {t("experienceTitle")}
          </h2>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index} exp={exp} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}