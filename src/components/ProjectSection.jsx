import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, index, isDark, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={onClick}
        >
            <div className={`relative p-3 transition-all duration-500 border ${isDark ? "bg-[#111] border-white/5" : "bg-white border-black/5 shadow-sm"}`}>
                <div className="relative overflow-hidden aspect-[1.5/1] bg-neutral-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="mt-5 flex justify-between items-start">
                    <div>
                        <h3 className={`text-sm font-black uppercase tracking-wider ${isDark ? "text-white" : "text-black"}`}>
                            {project.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-widest text-[#4fd1c5] font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {project.subtitle}
                        </p>
                    </div>
                    <span className="text-[10px] font-black opacity-20 italic">0{index + 1}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default function ProjectSection() {
    const { isDark } = useTheme();
    const { t } = useLang();
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = t("projects") || [];

    return (
        <section className={`py-20 px-6 md:px-20 transition-colors duration-1000 ${isDark ? "bg-[#0a0c10]" : "bg-[#f5f5f5]"}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-16">
                    <h2 className={`text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase ${isDark ? "text-white" : "text-black"}`}>
                        {t("projectsTitle")}
                    </h2>
                    <div className="hidden md:block w-1/3 h-[1px] bg-[#4fd1c5]/30 mb-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            index={index} 
                            project={project} 
                            isDark={isDark} 
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        isDark={isDark} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
}