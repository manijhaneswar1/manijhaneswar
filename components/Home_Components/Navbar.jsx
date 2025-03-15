import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const link_data = ["rdc", "mnrdc", "car-pooling"];
    const [projectLink, setProjectLink] = useState(link_data[0]);

    const handleProjectClick = () => {
        const randomIndex = Math.floor(Math.random() * link_data.length);
        setProjectLink(link_data[randomIndex]);
    };

    return (
        <nav className="w-full bg-black text-white bg-opacity-90 backdrop-blur-md shadow-md py-6 lg:py-12 px-10 md:px-20 lg:px-24
                        md:flex md:items-center md:justify-between space-y-5">

            {/* Logo Section (Left) */}
            <div className="flex items-center">
                <Link to="/" className="flex items-center gap-3">
                    <img alt="Logo" src="/portfolio_icon-removebg-preview.png" className="w-10 h-10" />
                    <h1 className="text-xl font-semibold tracking-wide"><span className="hidden md:inline">Mani</span> Jhaneswar
                    </h1>
                </Link>
            </div>

            {/* Navigation Links (Right) */}
            <div className="flex items-center justify-center gap-5 font-medium text-lg">
                <Link to="/" className="hover:border-b-2 border-white">Home</Link>
                <Link to="/about" className="hover:border-b-2 border-white">About</Link>
                <Link to={`/${projectLink}`} className="hover:border-b-2 border-white" onClick={handleProjectClick}>
                    Random Project
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;
