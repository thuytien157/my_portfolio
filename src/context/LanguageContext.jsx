import { createContext, useContext, useState } from "react";

const translations = {
    en: {
        home: "// home",
        about: "// about me",
        work: "// work",
        experience: "// experience",
        contact: "// contact",
        heroTitle: "Hello! ",
        heroHighlight: "I'm Thuy Tien",
        subtitle: "A Web Developer",
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