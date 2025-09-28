import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center py-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6">
                Get in Touch
            </h1>

            <a
                href="mailto:nikola.cvrlja@gmail.com"
                className="mb-6 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg
                   shadow-md hover:bg-sky-600 transition-colors duration-300"
            >
                📧 nikola.cvrlja@gmail.com
            </a>

            <div className="flex gap-6 text-3xl text-gray-400">
                <a href="https://github.com/cvrlja1" target="_blank" rel="noreferrer"
                   className="hover:text-sky-400 hover:scale-105 transition-all duration-300">
                    <FaGithubSquare size={60}/>
                </a>
                <a href="https://www.linkedin.com/in/nikolacvrlja" target="_blank" rel="noreferrer"
                   className="hover:text-sky-400 hover:scale-105 transition-all duration-300">
                    <FaLinkedin size={60}/>
                </a>
            </div>
        </section>
    )
}

export default Contact;