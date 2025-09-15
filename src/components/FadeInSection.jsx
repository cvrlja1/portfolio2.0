import { useEffect } from "react";

export default function FadeInSection({ children, className = "" }) {
    useEffect(() => {
        // Grab all elements with "fade-in"
        const els = document.querySelectorAll(".fade-in");

        // Create an observer that watches when elements enter the screen
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // If the element is visible -> add "is-visible" class
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.15 } // only trigger when 15% of element is visible
        );

        // Attach observer to each fade-in element
        els.forEach((el) => obs.observe(el));

        // Cleanup when component unmounts
        return () => obs.disconnect();
    }, []);

    // Return a wrapper div with the fade-in class
    return <div className={`fade-in ${className}`}>{children}</div>;
}
