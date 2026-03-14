import './App.css'
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from './components/AboutSection';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen transition-colors duration-500">
          <Navbar />
          <HeroSection />
          <AboutSection />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;