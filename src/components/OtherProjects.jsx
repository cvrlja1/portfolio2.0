import FadeInSection from "./FadeInSection";
import {FaGithubSquare} from "react-icons/fa";

function OtherProjects() {
    return (
        <section id="projects" className="flex flex-col items-center mb-20">
            <FadeInSection>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">Other Projects</h1>
            </FadeInSection>

            <FadeInSection>
            <div className="flex flex-col mt-20 justify-evenly w-full gap-20">
                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">cub3D</h3>

                    <p className="text-gray-300 mb-4">
                        A 3D raycasting game inspired by Wolfenstein 3D, developed as part of the <strong>42 Vienna curriculum.</strong><br/>
                        The project implements a simple game engine from scratch in <strong>C</strong>, rendering a dynamic 3D environment using <strong>raycasting techniques.</strong>
                    </p>

                    <p className="text-gray-300 mb-4">
                        Players can navigate a maze-like map with smooth movement and collision detection, <br/>while walls, textures, and basic graphics are rendered in real time.<br/>
                        The project strengthened my understanding of <strong>computer graphics, memory management, and low-level programming in C.</strong>
                    </p>

                    <ul className="list-disc list-inside text-gray-300 mb-4">
                        <li>Raycasting engine to render a 3D perspective</li>
                        <li>Texture mapping for walls and surfaces</li>
                        <li>Player movement with collision detection</li>
                        <li>Map parsing from configuration files</li>
                        <li>Built entirely in C with the MiniLibX graphics library</li>
                    </ul>

                    <p className="text-gray-200 font-semibold">
                        <strong>Tech Stack:</strong> C, MiniLibX, Raycasting, Math/Trigonometry
                    </p>
                    <a href="https://github.com/cvrlja1/cub3d" target="_blank" rel="noreferrer"
                       className="hover:text-sky-400 hover:scale-110 transition-all duration-300 inline-flex w-auto mt-5">
                        <FaGithubSquare size={60} color={"white"}/>
                    </a>
                </div>

                <div className="flex flex-col items-start">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Minishell</h3>

                        <p className="text-gray-300 mb-4">
                            A simplified Unix shell developed as part of the <strong>42 Vienna curriculum.</strong><br />
                            The project implements a basic shell in <strong>C</strong> that parses and executes commands, handling both built-in and external programs.
                        </p>

                        <p className="text-gray-300 mb-4">
                            Users can execute commands like <strong>ls</strong>, <strong>cat</strong>, <strong>echo</strong>, and more.<br />
                            The shell supports <strong>pipes</strong>, <strong>input/output redirections</strong>, and <strong>environment variable expansion</strong>.<br />
                            Signal handling for <strong>Ctrl+C</strong> and <strong>Ctrl+D</strong> is implemented to ensure a smooth and safe user experience.
                        </p>

                        <ul className="list-disc list-inside text-gray-300 mb-4">
                            <li>Parsing and executing commands with arguments</li>
                            <li>Built-in commands: cd, exit, echo, export, unset, env</li>
                            <li>Input/output redirections: &lt;, &gt;, &gt;&gt;</li>
                            <li>Command chaining with pipes (|)</li>
                            <li>Environment variable handling and expansion</li>
                            <li>Signal management for interactive use</li>
                        </ul>

                        <p className="text-gray-200 font-semibold">
                            <strong>Tech Stack:</strong> C, Unix system calls, Process Management, File Descriptors
                        </p>
                        <a href="https://github.com/cvrlja1/minishell" target="_blank" rel="noreferrer"
                           className="hover:text-sky-400 hover:scale-110 transition-all duration-300 inline-flex w-auto mt-5">
                            <FaGithubSquare size={60} color={"white"}/>
                        </a>
                    </div>
            </div>
                </FadeInSection>
        </section>
    )
}

export default OtherProjects;