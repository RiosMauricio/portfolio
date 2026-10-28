import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { useLanguage } from "./i18n/languageContext";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Demos } from "./pages/Demos/Demos";
import { Projects } from "./pages/Projects/Projects";
import { NotFound } from "./pages/NotFound/NotFound";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LanguageSwitcher } from "./components/Header/LanguageSwitcher";
import { BackgroundFx } from "./components/BackgroundFx";

const SkipLink = () => {
  const { t } = useLanguage();
  return (
    <a href="#main" className="skip-link">
      {t.a11y.skipToContent}
    </a>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <BackgroundFx />
        <SkipLink />
        <Header/>
        <main id="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
        <LanguageSwitcher/>
      </Router>
    </LanguageProvider>
  );
}
