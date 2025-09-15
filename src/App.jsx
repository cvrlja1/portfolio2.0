import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import FloatingShapes from "./components/FloatingShapes.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-800 to-purple-950 bg-fixed">
            <FloatingShapes />
            <Hero />
            <Projects />
            <OtherProjects />
            <Contact />
        </div>
    )
}

export default App;

