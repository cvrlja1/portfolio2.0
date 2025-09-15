function Navigation() {

    return (
            <nav className="flex w-full gap-6 pt-6 pl-6 items-center">
                <a href="/"
                   className="inline-block px-6 py-2 rounded-full text-gray-200 font-sans text-2xl
                                drop-shadow-md border-transparent border-2 hover:opacity-80 hover:border-sky-500
                                transition-all duration-200 ease-in-out">
                    Home
                </a>
                <a href="#projects"
                   className="inline-block px-6 py-2 rounded-full text-gray-200 font-sans text-2xl
                                drop-shadow-md border-transparent border-2 hover:opacity-80 hover:border-sky-500
                                transition-all duration-200 ease-in-out">
                    Projects
                </a>
                <a href="/"
                   className="inline-block px-6 py-2 rounded-full text-gray-200 font-sans text-2xl
                                drop-shadow-md border-transparent border-2 hover:opacity-80 hover:border-sky-500
                                transition-all duration-200 ease-in-out">
                    Contact
                </a>
            </nav>
    )
}

export default Navigation;