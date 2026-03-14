import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";

const handImages = [
  "https://www.adamhartwig.co.uk/images/screens/about/anatomy/1x/work/hands/hand2.png",
  "https://www.adamhartwig.co.uk/images/screens/about/anatomy/1x/work/hands/hand3.png",
  "https://www.adamhartwig.co.uk/images/screens/about/anatomy/1x/work/hands/hand4.png",
];

export default function AboutSection() {
  const { isDark } = useTheme();
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  
  const slides = t("aboutSlides") || [];

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const themeStyles = isDark 
    ? { 
        bg: "bg-[#0a0c10]", 
        text: "text-white", 
        accent: "text-[#4fd1c5]", 
        border: "border-[#4fd1c5]/30", 
        btnHover: "hover:bg-[#4fd1c5] hover:border-[#4fd1c5]",
        handFilter: ""
      }
    : { 
        bg: "bg-[#f08080]",
        text: "text-white", 
        accent: "text-white", 
        border: "border-white/40", 
        btnHover: "hover:bg-white hover:text-[#f08080]",
        handFilter: ""
      };

  return (
    <section 
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-1000 ${themeStyles.bg}`}
    >
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px] flex items-end justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={handImages[index]}
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="max-h-full w-auto object-contain select-none pointer-events-none"
              style={{ filter: themeStyles.handFilter }}
            />
          </AnimatePresence>
        </div>

        <div className={`w-full md:w-1/2 ${themeStyles.text} z-10`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className={`text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 uppercase ${isDark ? themeStyles.accent : ""}`}>
                {slides[index]?.title}
              </h2>
              <p className={`text-base md:text-lg font-medium leading-relaxed max-w-md ${isDark ? "text-slate-300" : "text-white/90"}`}>
                {slides[index]?.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-10">
            {[prevSlide, nextSlide].map((fn, i) => (
              <button 
                key={i}
                onClick={fn}
                className={`w-12 h-12 border-2 ${themeStyles.border} rounded-full flex items-center justify-center transition-all duration-300 group ${themeStyles.btnHover} ${isDark ? 'hover:text-[#0a0c10]' : ''}`}
              >
                <span className="text-xl group-active:scale-90">{i === 0 ? "←" : "→"}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 rotate-90 origin-center hidden lg:block">
        <span className={`text-[8rem] font-black uppercase select-none opacity-5 transition-colors ${isDark ? 'text-[#4fd1c5]' : 'text-white'}`}>
          {t("aboutTitle")}
        </span>
      </div>
    </section>
  );
}