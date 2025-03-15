import { FaArrowLeft } from "react-icons/fa"
import {useState, useEffect} from "react";
const Project = (props) =>{
    const [scroll , setScroll] = useState(0);

    useEffect(()=>{
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    },[]);

    return (
        <div>
            {/* Starting Content */}
            <div className=" relative w-full h-screen px-8 md:px-20 lg:px-24 text-white text-start pt-32 lg:pt-32">
                <div>
                    <a href='/' className="flex gap-2 items-center"><FaArrowLeft/> Back to Projects</a>
                </div>
                {/* Title */}
                <div className="pt-12">
                    <h1 className="text-4xl md:text-5xl lg:text-8xl font-mono">{props.title}</h1>
                    <p className="text-sm md:text-lg lg:text-xl font-sans pt-6 leading-relaxed">{props.description}</p>
                    {props.description2 &&
                        <p className="text-sm md:text-lg lg:text-xl font-sans pt-6 leading-relaxed">{props.description2}</p>}
                </div>
                <div className="text-sm md:text-lg lg:text-xl font-sans pt-10 text-slate-200">{props.myRole}</div>
                {scroll > 0
                    &&
                    <div
                        className="absolute inset-0 h-screen bg-black"
                         style={
                                {opacity : Math.min(scroll / 450, 1)}
                                }
                    ></div>
                }
            </div>
            {/* Main Image to be display about Project */}
            <div>
                <img  />
            </div>
        </div>
    )
}
export default Project;