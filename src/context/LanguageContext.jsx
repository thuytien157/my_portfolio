import { createContext, useContext, useState } from "react";

const translations = {
    en: {
        home: "// home",
        about: "// about me",
        work: "// projects",
        experience: "// experience",
        contact: "// contact",
        heroTitle: "Hi there! ",
        heroHighlight: "I'm Thuy Tien",
        subtitle: "Web Developer",
        featured: "Tech Stack & Tools",
        aboutTitle: "ABOUT",
        aboutSlides: [
            {
                title: "FOCUS",
                desc: "For me, coding is more than just a task—it's about creating value. I'm always exploring fresh concepts outside of work to keep my creative spark alive and bring something unique to every project I touch.",
            },
            {
                title: "SKILLS",
                desc: "Armed with PHP, JavaScript, and modern frameworks, I enjoy building scalable systems from the ground up. I believe that true quality lies in clean code that’s as robust as it is efficient.",
            },
            {
                title: "VISION",
                desc: "I’m on a mission to bridge the gap between complex logic and beautiful design. My next big step? Diving into AI to build smarter applications and keep pushing the boundaries of what's possible.",
            }
        ],
        projectsTitle: "// PROJECTS",
        projects: [
    {
        id: "p1",
        title: "PUDDING RUSH",
        subtitle: "Interactive 3D Web Game",
        image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1000",
        gallery: [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000"
        ],
        description: "A personal project exploring Three.js and Physics engines. Focuses on high-performance rendering and playful user interactions.",
        tags: ["Three.js", "React Three Fiber", "GSAP"],
        link: "https://pudding-rush.demo"
    },
    {
        id: "p2",
        title: "NEO-VIBE PORTFOLIO",
        subtitle: "Awwwards Inspired Design",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000",
        gallery: [
            "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?q=80&w=1000",
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000"
        ],
        description: "Experimental portfolio concept using advanced Framer Motion transitions and custom shader backgrounds.",
        tags: ["React", "GLSL", "Framer Motion"],
        link: "https://neo-vibe.design"
    },
    {
        id: "p3",
        title: "ZEN TASKER",
        subtitle: "Minimalist Productivity Tool",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
        gallery: [
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
            "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000"
        ],
        description: "A productivity app focusing on cognitive ease and deep work, featuring a custom-built pomodoro timer and habit tracker.",
        tags: ["Next.js", "Tailwind", "Supabase"],
        link: "https://zentasker.app"
    }
],
        experienceTitle: "EXPERIENCE",
        experienceBg: "HISTORY",
        experienceItems: [
            {
                year: "FEB 2026 – MAR 2026",
                role: "MM Mega Market Promotion System Developer",
                company: "ASIA DIGITALIZATION",
                description: "MM Mega Market Promotion System: Designed RESTful APIs and optimized Elasticsearch data mapping. Managed complex product label logic and Excel validation systems.",
                tech: ["Laravel", "Vue.js", "AWS", "Elasticsearch"]
            },
            {
                year: "NOV 2025 – MAR 2026",
                role: "Booking & Corporate Web (Amory, KLIC)",
                company: "ASIA DIGITALIZATION",
                description: "Booking & Corporate Web: Customized booking logic, developed currency converters, and automated data sync from forms to Google Sheets/Excel.",
                tech: ["WordPress", "PHP", "JavaScript", "CSS"]
            },
            {
                year: "SEP 2025 – DEC 2025",
                role: "Menas POS & Sales Management Developer",
                company: "ASIA DIGITALIZATION",
                description: "POS & Sales Management (Menas): Built PIN-based auth, VietQR integration, and a Voucher module with automated email campaigns and statistics dashboard.",
                tech: ["Laravel", "jQuery", "MySQL", "VietQR"]
            },
            {
                year: "JUL 2025 – SEP 2025",
                role: "CollabXP (SaaS)",
                company: "ASIA DIGITALIZATION",
                description: "CollabXP (SaaS): Implemented core multi-language support and built dynamic data rendering mechanisms for the platform.",
                tech: ["CodeIgniter 3", "JavaScript", "MySQL"]
            }
        ]
    },
    vi: {
        home: "// trang chủ",
        about: "// về tôi",
        work: "// dự án",
        experience: "// kinh nghiệm",
        contact: "// liên hệ",
        heroTitle: "Xin chào! ",
        heroHighlight: "Mình là Thủy Tiên ",
        subtitle: "Lập trình viên Web",
        featured: "Công nghệ sử dụng",
        aboutTitle: "VỀ TÔI",
        aboutSlides: [
            {
                title: "TẬP TRUNG",
                desc: "Trong công việc, mình không chỉ tập trung vào code mà còn tìm cách tối ưu trải nghiệm. Ngoài giờ làm, mình thường xuyên 'vọc vạch' những ý tưởng mới lạ để việc lập trình luôn là một hành trình đầy cảm hứng mỗi ngày.",
            },
            {
                title: "KỸ NĂNG",
                desc: "Với nền tảng từ PHP đến JavaScript, mình thích xây dựng mọi thứ từ gốc để đảm bảo hệ thống vừa chạy mượt, vừa dễ phát triển sau này. Đối với mình, một ứng dụng tốt phải là một ứng dụng 'sạch' từ bên trong.",
            },
            {
                title: "MỤC TIÊU",
                desc: "Mình muốn kể những câu chuyện thú vị thông qua dòng code, nơi logic khô khan gặp gỡ những thiết kế tinh tế. Sắp tới, mình dự định chinh phục thêm nhiều công nghệ khác để làm cho các sản phẩm của mình trở nên thông minh và cá tính hơn.",
            }
        ],
        projectsTitle: "// DỰ ÁN",
        projects: [
    {
        id: "p1",
        title: "PUDDING RUSH",
        subtitle: "Game Web 3D Tương Tác",
        image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1000",
        gallery: [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000"
        ],
        description: "Dự án cá nhân khám phá Three.js và Physics engines. Tập trung vào việc render hiệu suất cao và tương tác người dùng vui nhộn.",
        tags: ["Three.js", "React Three Fiber", "GSAP"],
        link: "https://pudding-rush.demo"
    },
    {
        id: "p2",
        title: "NEO-VIBE PORTFOLIO",
        subtitle: "Cảm hứng thiết kế Awwwards",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000",
        gallery: [
            "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?q=80&w=1000",
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000"
        ],
        description: "Concept Portfolio thử nghiệm sử dụng các hiệu ứng chuyển cảnh Framer Motion nâng cao và shader background tùy chỉnh.",
        tags: ["React", "GLSL", "Framer Motion"],
        link: "https://neo-vibe.design"
    },
    {
        id: "p3",
        title: "ZEN TASKER",
        subtitle: "Công cụ làm việc tối giản",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
        gallery: [
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
            "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000"
        ],
        description: "Ứng dụng tăng năng suất tập trung vào sự tối giản và khả năng tập trung sâu, tích hợp bộ đếm Pomodoro và theo dõi thói quen.",
        tags: ["Next.js", "Tailwind", "Supabase"],
        link: "https://zentasker.app"
    }
],
        experienceTitle: "KINH NGHIỆM",
        experienceBg: "LỊCH SỬ",
        experienceItems: [
            {
                year: "THG 02/2026 – THG 03/2026",
                role: "Hệ thống Khuyến mãi MM Mega Market",
                company: "ASIA DIGITALIZATION",
                description: "Hệ thống khuyến mãi MM Mega Market: Thiết kế RESTful API và tối ưu hóa ánh xạ dữ liệu Elasticsearch. Quản lý logic nhãn sản phẩm phức tạp và hệ thống xác thực Excel.",
                tech: ["Laravel", "Vue.js", "AWS", "Elasticsearch"]
            },
            {
                year: "THG 11/2025 – THG 03/2026",
                role: "Web Đặt chỗ (Amory) & Giới thiệu Doanh nghiệp (KLIC)",
                company: "ASIA DIGITALIZATION",
                description: "Web Đặt chỗ & Doanh nghiệp: Tùy chỉnh logic booking, phát triển bộ chuyển đổi tiền tệ và tự động đồng bộ dữ liệu từ form sang Google Sheets/Excel.",
                tech: ["WordPress", "PHP", "JavaScript", "CSS"]
            },
            {
                year: "THG 09/2025 – THG 12/2025",
                role: "Hệ thống POS & Quản lý bán hàng (Menas)",
                company: "ASIA DIGITALIZATION",
                description: "Hệ thống POS & Quản lý bán hàng (Menas): Xây dựng xác thực mã PIN, tích hợp thanh toán VietQR và module Voucher với chiến dịch email tự động.",
                tech: ["Laravel", "jQuery", "MySQL", "VietQR"]
            },
            {
                year: "THG 07/2025 – THG 09/2025",
                role: "CollabXP (SaaS)",
                company: "ASIA DIGITALIZATION",
                description: "CollabXP (SaaS): Triển khai hỗ trợ đa ngôn ngữ cốt lõi và xây dựng cơ chế hiển thị dữ liệu động cho nền tảng.",
                tech: ["CodeIgniter 3", "JavaScript", "MySQL"]
            }
        ]
    }
};
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");
    const t = (key) => translations[lang][key] || key;
    const toggleLang = () => setLang(lang === "en" ? "vi" : "en");

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);