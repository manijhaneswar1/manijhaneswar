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
        <footer className="relative w-full text-white px-6 md:px-20 py-15 overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(project_images/footer-bg-2.jpg)`
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 space-y-8">

                {/* Logo Section */}
                <div className="flex items-center gap-4 pb-5">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            alt="Logo"
                            src="portfolio_icon-removebg-preview.webp"
                            className="w-10 h-10 md:w-12 md:h-12"
                        />
                        <h1 className="tracking-wider text-xl md:text-2xl font-mono">
                            Mani Jhaneswar
                        </h1>
                    </Link>
                </div>

                {/* Navigation & Socials */}
                <div className="flex flex-col md:flex-row md:items-center gap-6">

                    {/* Links */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <Link
                            to={`/${projectLink}`}
                            onClick={handleProjectClick}
                            className="text-lg md:text-xl font-medium hover:text-gray-300 transition"
                        >
                            My Work
                        </Link>

                        <a
                            href="https://drive.google.com/file/d/1vZHh86rgv2VGu9dmX305K5axHBumIklF/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg md:text-xl font-medium hover:text-gray-300 transition"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 md:gap-6 items-center justify-center">
                        <a href="https://www.linkedin.com/in/manijhaneswar/" target="_blank">
                            <Linkedin size={28} />
                        </a>

                        <a href="https://github.com/manijhaneswar1" target="_blank">
                            <Github size={28} />
                        </a>

                        <a href="https://www.instagram.com/_mr__jhaneswar__/" target="_blank">
                            <Instagram size={28} />
                        </a>

                        <a href="https://leetcode.com/u/manijhaneswar1/" target="_blank">
                            <Code size={28} />
                        </a>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center md:text-left text-sm md:text-base">
                    <p className="font-mono">ధన్యవాదాలు. धन्यवादः। 🙌🏼</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
