import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";

const ProjectCard = ({ project, index, isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <a href="#" className="block relative p-4 transition-transform duration-300 group-hover:-translate-y-1">
                <div className={`absolute inset-0 transition-colors duration-500 
                    ${isDark ? "bg-[#1a1c23]" : "bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)]"}`}
                >
                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#e0e0e0]/50" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-[#e0e0e0]/50" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#e0e0e0]/50" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#e0e0e0]/50" />
                </div>

                <div className="relative z-10 flex flex-col">
                    <div className="relative overflow-hidden bg-[#f0f0f0] aspect-[1.4/1]">
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                        
                        <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            ${isDark ? "bg-[#4fd1c5]/20 backdrop-blur-[2px]" : "bg-black/40 backdrop-blur-[2px]"}`}>
                            
                            <span className="px-5 py-2 border-2 border-white text-white text-[11px] font-black uppercase tracking-[0.3em]">
                                View Detail
                            </span>
                        </div>
                    </div>

                    <div className="pt-6 pb-2">
                        <h3 className={`text-[15px] font-black tracking-tight leading-tight uppercase mb-1 group-hover:text-[#4fd1c5] transition-colors duration-300
                            ${isDark ? "text-white" : "text-[#555]"}`}>
                            {project.title}
                        </h3>
                        <p className={`text-[12px] font-medium opacity-60 italic group-hover:opacity-100 transition-opacity duration-300
                            ${isDark ? "text-slate-400" : "text-[#888]"}`}>
                            {project.subtitle}
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-40 font-black text-xl italic text-[#4fd1c5] group-hover:opacity-80 transition-opacity duration-300">
                    {index}
                </div>
            </a>
        </motion.div>
    );
};
export default function ProjectSection() {
    const { isDark } = useTheme();
    const { t } = useLang();
    const projects = t("projects") || [];

    return (
        <section className={`py-12 px-6 md:px-20 transition-colors duration-1000 
      ${isDark ? "bg-[#0a0c10]" : "bg-[#ebebeb]"}`}>
            <h2 className={`text-start text-5xl md:text-7xl font-black tracking-tighter leading-none mb-12 uppercase ${isDark ? "text-[#4fd1c5]" : "text-black"}`}>{t("projectsTitle")}</h2>
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} index={index} project={project} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
}