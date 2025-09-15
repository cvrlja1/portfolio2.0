export default function FloatingShapes() {
    const shapes = Array.from({ length: 10 }, () => {
        const size = Math.random() * 80 + 20; // define size first
        return {
            size,
            top: Math.random() * (100 - (size / window.innerHeight) * 100),   // stay in bounds vertically
            left: Math.random() * (100 - (size / window.innerWidth) * 100),   // stay in bounds horizontally
            color: "bg-sky-500",
            opacity: Math.random() * 0.3 + 0.2, // 0.2–0.5
            blur: "blur-3xl",
        };
    });

    return (
        <>
            {shapes.map((shape, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full ${shape.color} ${shape.blur} animate-pulse`}
                    style={{
                        top: `${shape.top}vh`,
                        left: `${shape.left}vw`,
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        opacity: shape.opacity,
                        animationDuration: `${3 + Math.random() * 4}s`,
                    }}
                ></div>
            ))}
        </>
    );
}
