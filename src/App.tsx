import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Demos } from "./pages/Demos/Demos";
import { Projects } from "./pages/Projects/Projects";
import { NotFound } from "./pages/NotFound/NotFound";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LanguageSwitcher } from "./components/Header/LanguageSwitcher";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
        <LanguageSwitcher/>
      </Router>
    </LanguageProvider>
  );
}