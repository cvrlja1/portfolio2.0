import { useEffect, useState } from "react";

export default function FloatingShapes() {
    const [pageHeight, setPageHeight] = useState(0);
    const [pageWidth, setPageWidth] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            setPageHeight(document.documentElement.scrollHeight);
            setPageWidth(document.documentElement.scrollWidth);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    if (!pageHeight || !pageWidth) return null;

    const shapes = Array.from({ length: 20 }, () => {
        const size = Math.random() * 80 + 20;
        return {
            size,
            top: Math.random() * (pageHeight - size),
            left: Math.random() * (pageWidth - size),
            color: "bg-sky-400",
            opacity: Math.random() * 0.5 + 0.2,
            blur: "blur-3xl",
            speed: 1 + Math.random() * 3,
        };
    });

    return (
        <div
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{ height: pageHeight }}
        >
            {shapes.map((shape, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full ${shape.color} ${shape.blur} animate-pulse`}
                    style={{
                        top: `${shape.top}px`,
                        left: `${shape.left}px`,
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        opacity: shape.opacity,
                        animationDuration: `${(3 + Math.random() * 4) / shape.speed}s`,
                    }}
                />
            ))}
        </div>
    );
}
