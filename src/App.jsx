import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

import Container from "./layouts/Container";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Container customClass="min-h-[75vh]"><Home /></Container>} />
        <Route path="/projects" element={<Container customClass="min-h-[75vh]"><Projects /></Container>} />
        <Route path="/company" element={<Container customClass="min-h-[75vh]"><Company /></Container>} />
        <Route path="/contact" element={<Container customClass="min-h-[75vh]"><Contact /></Container>} />
        <Route path="/newproject" element={<Container customClass="min-h-[75vh]"><NewProject /></Container>} />
        <Route path="/project/:id" element={<Container customClass="min-h-[75vh]"><Project /></Container>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


