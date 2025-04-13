import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Demos } from "./pages/Demos/Demos";
import { Projects } from "./pages/Projects/Projects";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}