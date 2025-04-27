import {FaArrowLeft, FaArrowRight, FaCircle} from "react-icons/fa";
import { useState, useEffect } from "react";

const Project = (props) => {
    const [scroll, setScroll] = useState(0);
    const [opacityDivider, setOpacityDivider] = useState(450);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        const updateOpacityDivider = () => {
          if (window.innerWidth >= 1024) {
            setOpacityDivider(650); // Large screens
          } else if (window.innerWidth >= 768) {
            setOpacityDivider(650); // Medium screens
          } else {
            setOpacityDivider(650); // Small screens
          }
        };
        handleScroll();
        updateOpacityDivider();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateOpacityDivider);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateOpacityDivider);
        };
    }, []);

    // Extract YouTube video ID from URL for embedding
    const getYouTubeEmbedUrl = (url) => {
        if (!url) return "";
        const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const handleMediaClick = () => {
        if (props.video) {
            window.open(props.video, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div>
            {/* Header Section */}
            <div className="relative w-full h-auto px-8 md:px-20 lg:px-24 text-white text-start pt-28 md:pt-32 pb-30">

                <div>
                    <a href='' className="flex gap-2 items-center">
                        <FaArrowLeft /> Back to Projects
                    </a>
                </div>

                <div className="pt-12">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-mono">{props.title}</h1>
                    <p className="text-sm md:text-lg lg:text-xl font-sans pt-6 leading-relaxed">{props.description}</p>
                    {props.description2 && (
                        <p className="text-sm md:text-lg lg:text-xl font-sans pt-6 leading-relaxed">{props.description2}</p>
                    )}
                </div>

                <div className="text-sm md:text-lg lg:text-xl font-sans pt-10 text-slate-200">{props.myRole}</div>
                {props.permission && (
                    <div className="text-xs md:text-sm lg:text-lg font-thin pt-10 text-slate-600">{props.permission}</div>
                )}

                {scroll > 0 && (
                    <div
                        className="absolute inset-0 h-auto bg-black"
                        style={{ opacity: Math.min(scroll / opacityDivider, 1) }}
                    ></div>
                )}
            </div>

            {/* Embedded Media Section */}
            {props.video && (
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-screen cursor-pointer" onClick={handleMediaClick}>
                    <iframe
                        src={getYouTubeEmbedUrl(props.video)}
                        width="100%"
                        title="YouTube video Micro Nano"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                    {/* Transparent overlay for clicking */}
                    <div className="absolute inset-0 bg-transparent"></div>
                </div>
            )}

            {props.image && (
                  <a
                    href={props.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <img
                      src={props.image}
                      alt="project-mock-image"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
            )}

            {props.website && props.website.length > 0 && (
                <div
                    className="font-mono text-white flex items-center justify-center">
                    <img src="pencil_design.webp" className="w-[16rem] h-[14rem] relative top-4 right-2.5"/>
                    <a href={props.website}
                       target="_blank"
                       className="text-white absolute flex items-center gap-2.5">
                        link
                        <FaCircle />
                    </a>
                </div>
            )}

        </div>
    );
};

export default Project;
