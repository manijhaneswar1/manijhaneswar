import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github, Code } from "lucide-react";
import { useState } from "react";

const Footer = () => {
    const link_data = ["rdc", "mnrdc", "car-pooling"];
    const [projectLink, setProjectLink] = useState(link_data[0]);

    const handleProjectClick = () => {
        const randomIndex = Math.floor(Math.random() * link_data.length);
        setProjectLink(link_data[randomIndex]);
    };

    return (
        <footer className="relative z-10 w-full text-white px-6 md:px-20 py-10 bg-black bg-opacity-80 backdrop-blur-md">
            <div className="space-y-8">
                {/* Logo Section */}
                <div className="flex items-center gap-4 pb-5">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            alt="Logo"
                            src="portfolio_icon-removebg-preview.webp"
                            className="w-10 h-10 md:w-12 md:h-12"
                        />
                        <h1 className="text-white tracking-wider text-xl md:text-2xl font-mono">
                            Mani Jhaneswar
                        </h1>
                    </Link>
                </div>

                {/* Navigation & Socials */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 text-white">
                    {/* Links Section */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <Link
                            to={`/${projectLink}`}
                            onClick={handleProjectClick}
                            className="tracking-wide text-lg md:text-xl font-medium hover:text-gray-300 transition-all duration-300"
                        >
                            My Work
                        </Link>

                        <a
                            href="https://drive.google.com/file/d/1vZHh86rgv2VGu9dmX305K5axHBumIklF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tracking-wide text-lg md:text-xl font-medium hover:text-gray-300 transition-all duration-300"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 md:gap-6 text-gray-300 items-center justify-center">
                        <a
                            href="https://www.linkedin.com/in/manijhaneswar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-transform transform hover:scale-110"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="https://github.com/manijhaneswar1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-100 transition-transform transform hover:scale-110"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://www.instagram.com/_mr__jhaneswar__/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-100 transition-transform transform hover:scale-110"
                        >
                            <Instagram size={28} />
                        </a>
                        <a
                            href="https://leetcode.com/u/manijhaneswar1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-100 transition-transform transform hover:scale-110"
                        >
                            <Code size={28} />
                        </a>
                    </div>
                </div>

                <div className="text-center md:text-left text-sm md:text-base">
                    <p className="font-mono">ధన్యవాదాలు. धन्यवादः। 🙌🏼</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
