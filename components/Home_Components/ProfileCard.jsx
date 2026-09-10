import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

function ProfileCard() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(null);
    const [cursorVariant, setCursorVariant] = useState('default');

    const cardRef = useRef(null);
    const cursorRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                if (cursorRef.current) {
                    cursorRef.current.style.transform =
                        `translate(${e.clientX - rect.left}px, ${e.clientY - rect.top}px)`;
                }

                if (glowRef.current) {
                    glowRef.current.style.background =
                        `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12), transparent 50%)`;
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative min-h-screen overflow-hidden text-white"
        >

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("project_images/hero-img-2.jpg")`,
                    filter: "grayscale(100%)"
                }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* GLOW EFFECT */}
            <div
                ref={glowRef}
                className="absolute inset-0 pointer-events-none"
                style={{ mixBlendMode: "overlay" }}
            />

            {/* CONTENT */}
            <div className="relative z-10 min-h-screen flex items-center px-6 md:px-16 lg:px-24">

                <div className={`max-w-2xl transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>

                    {/* HEADING */}
                    <h1 className="font-bold mb-6 leading-tight">
                        <span className="block text-white/50 text-lg sm:text-xl md:text-2xl">
                            Who is this,
                        </span>

                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            Guy?
                        </span>
                    </h1>

                    {/* NAME */}
                    <p className="text-base sm:text-lg md:text-xl text-white/70">
                        My name is{" "}
                        <span
                            className="font-bold text-white text-xl sm:text-2xl md:text-3xl cursor-pointer hover:tracking-wider"
                            onMouseEnter={() => {
                                setHoveredElement('name');
                                setCursorVariant('hover');
                            }}
                            onMouseLeave={() => {
                                setHoveredElement(null);
                                setCursorVariant('default');
                            }}
                        >
                            Jhaneswar
                        </span>
                    </p>

                    {/* DESC */}
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80">
                        Money Music WebDev
                    </p>

                    {/* WORK */}
                    <div className="mt-6 flex items-center gap-3 flex-wrap">
                        <span className="text-base sm:text-lg md:text-xl text-white/70">
                            Check out my
                        </span>

                        <span
                            className="font-bold relative text-2xl sm:text-3xl md:text-4xl cursor-pointer"
                            onMouseEnter={() => {
                                setHoveredElement('work');
                                setCursorVariant('hover');
                            }}
                            onMouseLeave={() => {
                                setHoveredElement(null);
                                setCursorVariant('default');
                            }}
                        >
                            work

                            <X className={`absolute top-1/2 left-1/2 
                                -translate-x-1/2 -translate-y-1/2 
                                h-16 w-16 md:h-20 md:w-20
                                transition-all duration-700 ${
                                    hoveredElement === 'work'
                                        ? 'opacity-40 scale-110 rotate-90'
                                        : 'opacity-0 scale-50'
                                }`}
                            />
                        </span>

                        <span className="text-base sm:text-lg md:text-xl text-white/70">
                            below
                        </span>
                    </div>

                    {/* STATS */}
                    <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm">
                        <div>
                            <div className="text-lg md:text-2xl font-bold">
                                18+
                            </div>
                            <div className="text-xs md:text-sm text-white/60 uppercase">
                                Projects
                            </div>
                        </div>

                        <div>
                            <div className="text-lg md:text-2xl font-bold">
                                3 yrs
                            </div>
                            <div className="text-xs md:text-sm text-white/60 uppercase">
                                Experience
                            </div>
                        </div>

                        <div>
                            <div className="text-lg md:text-2xl font-bold">
                                9+
                            </div>
                            <div className="text-xs md:text-sm text-white/60 uppercase">
                                Clients
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* CURSOR */}
            <div
                ref={cursorRef}
                className="fixed w-6 h-6 md:w-8 md:h-8 pointer-events-none z-50 transition-all duration-300"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <div className={`w-full h-full rounded-full bg-white/20 blur-md transition-all duration-300 ${
                    cursorVariant === 'hover'
                        ? 'scale-150 opacity-40'
                        : 'scale-100 opacity-20'
                }`} />
            </div>

        </div>
    );
}

export default ProfileCard;
