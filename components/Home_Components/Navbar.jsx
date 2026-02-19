import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
    const [projectLink, setProjectLink] = useState("rdc");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();
    const navbarRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const link_data = ["rdc", "mnrdc", "car-pooling", "dden"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleClickOutside = (e) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(e.target) &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(e.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleProjectClick = () => {
        const randomIndex = Math.floor(Math.random() * link_data.length);
        setProjectLink(link_data[randomIndex]);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            {/* Navbar */}
            <div
                ref={navbarRef}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    isScrolled ? "py-3 bg-black/30" : "py-6 bg-transparent"
                }`}
            >
                <div className="px-6 md:px-12 lg:px-24 mx-auto">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                alt="Logo"
                                src="portfolio_icon-removebg-preview.webp"
                                className="w-10 h-10 md:w-12 md:h-12"
                            />
                            <h1 className="text-white font-bold text-xl md:text-2xl">
                                <span className="hidden md:inline">Mani </span>
                                Jhaneswar
                            </h1>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8 text-white">
                            <Link
                                to="/"
                                className={isActive("/") ? "font-bold" : ""}
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className={isActive("/about") ? "font-bold" : ""}
                            >
                                About
                            </Link>

                            <Link
                                to={`/${projectLink}`}
                                onClick={handleProjectClick}
                            >
                                Random Project
                            </Link>
                        </div>

                        {/* Desktop Social */}
                        <div className="hidden md:flex items-center gap-4 text-white">
                            <a
                                href="https://github.com/manijhaneswar1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={20} />
                            </a>

                            <a
                                href="https://linkedin.com/in/manijhaneswar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={20} />
                            </a>

                            <a href="mailto:manijhaneswar@gmail.com">
                                <Mail size={20} />
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white z-50"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="fixed inset-0 bg-black z-40 pt-24 px-8 text-white md:hidden"
                >
                    <div className="flex flex-col gap-6 text-xl">

                        <Link
                            to="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>

                        <Link
                            to={`/${projectLink}`}
                            onClick={() => {
                                handleProjectClick();
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Random Project
                        </Link>
                    </div>

                    {/* Mobile Social */}
                    <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6">
                        <a
                            href="https://github.com/manijhaneswar1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github size={24} />
                        </a>

                        <a
                            href="https://linkedin.com/in/manijhaneswar"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={24} />
                        </a>

                        <a href="mailto:manijhaneswar@gmail.com">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
