import { FaArrowRight } from "react-icons/fa";
const ProjectCard = () => {

    const projectsData = [
        {
            id: "01",
            title: "RDC Website",
            description: "This is a sample RDC website project.",
            Link: "https://manijhaneswar1.github.io/manijhaneswar/#/rdc",
            image: "project_images/RDC_bg.webp",
        },
        {
            id: "02",
            title: "Resource Booking",
            description: "This is Resource Booking",
            Link: "https://manijhaneswar1.github.io/manijhaneswar/#/mnrdc",
            image: "project_images/resbook_bg.webp",
        },
        {
            id: "03",
            title: "Car Pooling App",
            description: "This is a car pooling web application.",
            Link: "https://manijhaneswar1.github.io/manijhaneswar/#/car-pooling",
            image: "project_images/car_pooling_bg.webp",
        },

    ];
    const handleScroll = ()=> {
        window.scrollBy({
            behavior : "smooth",
        })
    }

    return (
        <div className="flex flex-col">
            {projectsData.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div
                        key={index}
                        className="relative h-[400px] md:h-[500px] lg:h-[700px]"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                        }}
                        onScroll={handleScroll}
                    >
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        {/* Dark Overlay - Moves with Text */}
                        <div
                            className={`absolute inset-y-0 ${isEven ? "left-0" : "right-0"} w-full md:w-1/2 bg-black opacity-75`}
                        ></div>

                        {/* Text Content - Moves on Scroll */}
                        <div
                            className={`absolute inset-y-0 ${isEven ? "left-0" : "right-0"} w-full md:w-1/2 flex flex-col justify-center items-start px-10 md:px-16 lg:px-24 text-white`}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">{item.id}</h1>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">{item.title}</h2>
                            <p className="text-lg md:text-xl mb-6">{item.description}</p>

                            {/* View Project Button */}
                            <a
                                href={item.Link}
                                className="text-lg md:text-xl flex items-center gap-2 font-semibold hover:text-gray-300 transition duration-300"
                            >
                                View Project <FaArrowRight/>
                            </a>
                        </div>
                        {/* Need to Include my Portfolio Project here*/}
                        <div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectCard;
