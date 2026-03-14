import './App.css'
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';
import CustomCursor from "./components/CustomCursor"; // Import ở đây

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Thêm component con trỏ vào đây */}
        <CustomCursor /> 
        
        <div className="min-h-screen transition-colors duration-500">
          <Navbar />
          <section id="home"><HeroSection /></section>
          <section id="about"><AboutSection /></section>
          <section id="experience"><ExperienceSection /></section>
          <section id="work"><ProjectSection /></section>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;