import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import FloatingShapes from "./components/FloatingShapes.jsx";

function App() {
    return (
        <div className="p-10 flex flex-col min-h-screen bg-gradient-to-b from-[#0B0D31] via-[#312154] to-[#330E3B]">
            <FloatingShapes />
            <Hero />
            <Projects />
            <OtherProjects />
            <Contact />
        </div>
    )
}

export default App;

