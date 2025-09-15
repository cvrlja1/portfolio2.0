import FadeInSection from "./FadeInSection.jsx";

function Hero() {
    return (
            <section className="flex flex-col h-screen items-center justify-center text-center">
        {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Hi, I’m <span className="text-sky-400">Nikola</span>
            </h1>

            {/* Subheading */}
            <h2 className="mt-4 text-xl md:text-2xl text-gray-300 font-light">
                Aspiring Full-Stack Web Developer |{" "}
                <span className="text-sky-300">JavaScript • React • Node.js • Express</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                I build responsive, user-friendly, and efficient web applications while
                constantly improving my skills across the full stack.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-6">
                <a
                    href="#projects"
                    className="px-6 py-3 rounded-full bg-sky-500 text-white font-semibold text-lg
                     hover:bg-sky-400 hover:scale-105 transition duration-300 ease-in-out shadow-lg"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 rounded-full border-2 border-sky-500 text-sky-400 font-semibold text-lg
                     hover:bg-sky-500 hover:text-white hover:scale-105 transition duration-300 ease-in-out"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    )
}

export default Hero