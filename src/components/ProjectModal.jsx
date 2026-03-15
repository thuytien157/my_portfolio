import React from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, isDark, onClose }) {
    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={onClose}
        >
            <motion.div 
                initial={{ y: 50, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 50, scale: 0.95 }}
                className={`relative w-full max-w-6xl h-full md:h-[85vh] flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-sm ${isDark ? "bg-[#111] text-white" : "bg-white text-black"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-6 right-6 z-[60] mix-blend-difference hover:rotate-90 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>

                <div className="w-full md:w-[60%] h-1/2 md:h-full overflow-y-auto scrollbar-hide bg-black/20">
                    <img src={project.image} alt="" className="w-full h-auto mb-2" />
                    
                    {project.gallery?.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-full h-auto mb-2 last:mb-0" />
                    ))}
                    <div className="h-20" />
                </div>

                <div className="w-full md:w-[40%] h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-between overflow-y-auto border-l border-white/5">
                    <div className="space-y-8">
                        <div>
                            <span className="text-[#4fd1c5] text-[10px] font-black tracking-[0.4em] uppercase">Project Detail</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mt-3">
                                {project.title}
                            </h2>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-3">About</h4>
                            <p className="text-sm leading-relaxed opacity-70 italic">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map(tag => (
                                    <span key={tag} className="px-3 py-1 border border-white/10 text-[9px] font-bold uppercase opacity-60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5">
                        <a 
                            href={project.link} target="_blank" rel="noreferrer"
                            className="block w-full py-4 bg-[#4fd1c5] text-black text-center font-black text-[11px] uppercase tracking-widest hover:bg-white transition-colors"
                        >
                            Launch Live Site
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}