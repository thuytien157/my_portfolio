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
                title: "ShopGrid",
                subtitle: "E-commerce Website",
                image: "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750911/full_home.jpg",
                gallery: [
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750911/full_home.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750910/products.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750910/detail_product.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773751662/screencapture-shopgrid-vue-netlify-app-product-detail-quan-dai-unisex-ong-rong-lung-thun-varsity-sportive-black-s-1-2026-03-17-19_47_19.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750910/address.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750910/add_address.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750909/cart.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750909/checkout.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750878/mail_confirm.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750875/review_personal.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750877/order_detail.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750876/edit_order_detail_address.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750876/reason.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750875/form_review.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750876/dashboard.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750878/admin_products.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750878/add_products.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750879/edit_products.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750877/attribute.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750877/add_attribute.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750877/edit_attribute.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773751435/category.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750879/add_category.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750876/admin_users.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750875/admin_reviews.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750874/admin_review.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750874/review_detail.png",
                ],
                description: "A comprehensive e-commerce platform featuring automated email queues, and advanced product variant management. Designed with a focus on seamless user experience and robust administrative control.",
                tags: ["Laravel", "Vue.js", "MySQL", "Pusher"],
                link: "https://shopgrid.tieenz.site"
            },
            {
                id: "p2",
                title: "Donezo",
                subtitle: "Task & Project Management",
                image: "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752636/screencapture-donezo-vue-netlify-app-login-2026-03-17-19_56_21.jpg",
                gallery: [
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752634/screencapture-donezo-vue-netlify-app-forgot-password-2026-03-17-20_01_26.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752634/screencapture-donezo-vue-netlify-app-home-2026-03-17-20_00_03.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752634/screencapture-donezo-vue-netlify-app-projects-1-2026-03-17-20_00_39.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752636/screencapture-donezo-vue-netlify-app-projects-1-tasks-2026-03-17-19_58_11.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752635/screencapture-donezo-vue-netlify-app-projects-1-tasks-1-2026-03-17-19_59_01.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752636/screencapture-donezo-vue-netlify-app-projects-1-tasks-2026-03-17-19_58_25.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752636/screencapture-donezo-vue-netlify-app-projects-new-2026-03-17-19_57_54.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752635/screencapture-donezo-vue-netlify-app-projects-1-overview-2026-03-17-20_00_52.jpg",

                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752635/screencapture-donezo-vue-netlify-app-home-2026-03-17-20_00_18.jpg",
                ],
                description: "A collaborative task management tool with real-time updates via Pusher. It supports team invitations, detailed task history tracking, and a seamless light/dark mode experience for enhanced productivity.",
                tags: ["Laravel", "Vue.js", "Pusher", "Real-time", "MySQL"],
                link: "https://donezo-vue.netlify.app"
            },
            // {
            //     id: "p3",
            //     title: "ZEN TASKER",
            //     subtitle: "Minimalist Productivity Tool",
            //     image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
            //     gallery: [
            //         "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
            //         "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000"
            //     ],
            //     description: "A productivity app focusing on cognitive ease and deep work, featuring a custom-built pomodoro timer and habit tracker.",
            //     tags: ["Next.js", "Tailwind", "Supabase"],
            //     link: "https://zentasker.app"
            // }
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
                title: "ShopGrid",
                subtitle: "Website Thương mại điện tử",
                image: "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750911/full_home.jpg",
                gallery: [
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750911/full_home.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750910/products.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750910/detail_product.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773751662/screencapture-shopgrid-vue-netlify-app-product-detail-quan-dai-unisex-ong-rong-lung-thun-varsity-sportive-black-s-1-2026-03-17-19_47_19.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750910/address.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750910/add_address.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750909/cart.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750909/checkout.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750878/mail_confirm.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750875/review_personal.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750877/order_detail.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750876/edit_order_detail_address.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750876/reason.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750875/form_review.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750876/dashboard.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750878/admin_products.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750878/add_products.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750879/edit_products.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750877/attribute.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750877/add_attribute.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750877/edit_attribute.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773751435/category.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750879/add_category.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750876/admin_users.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750875/admin_reviews.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750874/admin_review.png",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773750874/review_detail.png",
                ],
                description: "Nền tảng thương mại điện tử toàn diện với hệ thống hàng đợi email tự động, quản lý biến thể sản phẩm (size/color). Dự án tập trung tối ưu trải nghiệm mua sắm và hệ thống quản trị nội bộ mạnh mẽ.",
                tags: ["Laravel", "Vue.js", "MySQL", "Pusher"],
                link: "https://shopgrid.tieenz.site"
            },
            {
                id: "p2",
                title: "Donezo",
                subtitle: "Quản lý công việc & Dự án",
                image: "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752636/screencapture-donezo-vue-netlify-app-login-2026-03-17-19_56_21.jpg",
                gallery: [
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752634/screencapture-donezo-vue-netlify-app-forgot-password-2026-03-17-20_01_26.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752634/screencapture-donezo-vue-netlify-app-home-2026-03-17-20_00_03.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752634/screencapture-donezo-vue-netlify-app-projects-1-2026-03-17-20_00_39.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752636/screencapture-donezo-vue-netlify-app-projects-1-tasks-2026-03-17-19_58_11.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752635/screencapture-donezo-vue-netlify-app-projects-1-tasks-1-2026-03-17-19_59_01.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752636/screencapture-donezo-vue-netlify-app-projects-1-tasks-2026-03-17-19_58_25.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752636/screencapture-donezo-vue-netlify-app-projects-new-2026-03-17-19_57_54.jpg",
                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752635/screencapture-donezo-vue-netlify-app-projects-1-overview-2026-03-17-20_00_52.jpg",

                    "https://res.cloudinary.com/daqhc6id1/image/upload/v1773752635/screencapture-donezo-vue-netlify-app-home-2026-03-17-20_00_18.jpg",
                ],
                description: "Công cụ quản lý công việc nhóm với tính năng cập nhật lịch sử thời gian thực qua Pusher. Hỗ trợ mời thành viên, quản lý deadline chặt chẽ và tích hợp chế độ sáng/tối giúp tối ưu hóa không gian làm việc.",
                tags: ["Laravel", "Vue.js", "Pusher", "Real-time", "MySQL"],
                link: "https://donezo-vue.netlify.app"
            },
            // {
            //     id: "p3",
            //     title: "ZEN TASKER",
            //     subtitle: "Công cụ làm việc tối giản",
            //     image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
            //     gallery: [
            //         "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
            //         "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000"
            //     ],
            //     description: "Ứng dụng tăng năng suất tập trung vào sự tối giản và khả năng tập trung sâu, tích hợp bộ đếm Pomodoro và theo dõi thói quen.",
            //     tags: ["Next.js", "Tailwind", "Supabase"],
            //     link: "https://zentasker.app"
            // }
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