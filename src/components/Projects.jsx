import FadeInSection from "./FadeInSection.jsx";


function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center mb-20">
            <FadeInSection>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-20">
                Projects
            </h1>
            </FadeInSection>

            <FadeInSection>
            <div className="flex flex-row justify-evenly w-full gap-20">
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Full Stack E-Commerce Website</h3>

                    <p className="text-gray-300 mb-4">
                        A fully functional e-commerce platform built for a company that sells <strong>firewood and
                        building materials</strong>.<br/>
                        Customers can browse products, view details, and make purchases seamlessly.
                    </p>

                    <p className="text-gray-300 mb-4">
                        The <strong>admin panel</strong> uses <strong>JWT authentication</strong> to securely manage
                        products, categories, and orders.<br/>
                        The frontend is built with <strong>React</strong> and styled
                        with <strong>TailwindCSS</strong> for a modern, responsive UI.<br/>
                        The backend uses <strong>Express</strong> and <strong>MySQL</strong> to handle API requests,
                        user data, and inventory efficiently.
                    </p>

                    <ul className="list-disc list-inside text-gray-300 mb-4">
                        <li>Browse products with categories and search functionality</li>
                        <li>Responsive and visually appealing UI with TailwindCSS</li>
                        <li>Secure admin panel with JWT authentication</li>
                        <li>CRUD operations for products, categories, and orders</li>
                        <li>Persistent data storage with MySQL database</li>
                        <li>Smooth user experience with React state management</li>
                    </ul>

                    <p className="text-gray-200 font-semibold">
                        <strong>Tech Stack:</strong> React, Express, TailwindCSS, JWT, MySQL
                    </p>
                </div>

                <img src="/projects/ecommerce_project.png" alt="Ecommerce Project"
                     className="max-w-md rounded-md w-full h-auto"/>
            </div>
            </FadeInSection>
        </section>
    )
}

export default Projects;