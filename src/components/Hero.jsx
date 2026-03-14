import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";

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
      animate={{
        y: [0, -40, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

const TechMarquee = ({ isDark }) => {
  const techs = ["PHP", "LARAVEL", "CODEIGNITER", "WORDPRESS", "JAVASCRIPT", "REACT.JS", "VUE.JS", "NODE.JS", "MYSQL", "POSTGRESQL", "PRISMA", "TAILWIND CSS", "BOOTSTRAP", "GIT", "GITLAB", "GITHUB", "VPS", "HOSTING"];
  const doubleTechs = [...techs, ...techs];

  return (
    <div className="relative w-screen max-w-5xl mt-12 overflow-hidden px-4">
      <div className={`absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-[#0a0c10]' : 'from-[#fcfcfc]'} to-transparent`} />
      <div className={`absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-[#0a0c10]' : 'from-[#fcfcfc]'} to-transparent`} />

      <motion.div
        className="flex whitespace-nowrap gap-16 md:gap-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {doubleTechs.map((tech, i) => (
          <span
            key={i}
            className={`text-sm md:text-base font-black italic tracking-[0.2em] uppercase transition-all duration-300
              ${isDark ? "text-white hover:text-[#4fd1c5] hover:opacity-100" : "text-black hover:text-[#38b2ac] hover:opacity-100"}`}
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function HeroSection() {
  const { isDark, setIsDark } = useTheme();
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  useEffect(() => {
    if (setIsDark) setIsDark(false);
  }, [setIsDark]);

  const orbs = [
    { size: 500, color: "#93f5ec", top: -5, left: 5, delay: 0 },
    { size: 600, color: "#ffd1ff", top: 25, left: 65, delay: 1 },
    { size: 400, color: "#ffecb3", top: 65, left: 10, delay: 2 },
    { size: 450, color: "#c3dafe", top: 10, left: 80, delay: 0.5 },
  ];

  return (
    <section
      ref={ref}
      className={`relative h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000 ${isDark ? "bg-[#0a0c10]" : "bg-[#fcfcfc]"}`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {orbs.map((orb, i) => (
          <GlowingOrb key={i} {...orb} isDark={isDark} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      <div className="relative z-20 text-center flex flex-col items-center select-none px-4 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={`text-6xl font-black tracking-tighter leading-[1.2] transition-colors duration-500 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t("heroTitle")}
            
            <span className="text-[#4fd1c5] drop-shadow-[0_0_15px_rgba(79,209,197,0.2)]">
              {t("heroHighlight")}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`text-xl uppercase tracking-[0.4em] font-bold mt-10 transition-colors ${isDark ? "text-slate-400" : "text-slate-500"}`}
        >
          {t("subtitle")}
        </motion.p>

        <div className="mt-10 flex flex-col items-center w-full">
          <p className={`text-[14px] mt-2 tracking-[0.4em] uppercase font-black mb-2 transition-opacity ${isDark ? "opacity-80 text-white" : "opacity-80 text-black"}`}>
            {t("featured")}
          </p>
          <TechMarquee isDark={isDark} />
        </div>
      </div>


    </section>
  );
}