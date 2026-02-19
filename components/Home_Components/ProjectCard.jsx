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
      title: "Car Pooling App",
      description: "This is a car pooling web application.",
      Link: "https://manijhaneswar1.github.io/manijhaneswar/#/car-pooling",
      image: "project_images/car_pooling_bg-v.mp4",
    },
    {
      id: "03",
      title: "Resource Booking",
      description: "This is Resource Booking",
      Link: "https://manijhaneswar1.github.io/manijhaneswar/#/mnrdc",
      image: "project_images/resbook_bg.webp",
    },
    {
      id: "04",
      title: "DDEN",
      description:
        "A fashion-tech platform that empowers designers by connecting creativity with digital innovation.",
      Link: "https://manijhaneswar1.github.io/manijhaneswar/#/dden",
      image: "project_images/mock_video_2.mp4", // video file inside public folder
    },
  ];

  return (
    <div className="flex flex-col">
      {projectsData.map((item, index) => {
        const isEven = index % 2 === 0;
        const isVideo = item.image.endsWith(".mp4");

        return (
          <div
            key={item.id}
            className="relative h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden"
          >
            {/* Background Media */}
            {isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={item.image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
            )}

            {/* Global Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Side Dark Panel */}
            <div
              className={`absolute inset-y-0 ${
                isEven ? "left-0" : "right-0"
              } w-full md:w-1/2 bg-black/75`}
            ></div>

            {/* Text Content */}
            <div
              className={`absolute inset-y-0 ${
                isEven ? "left-0" : "right-0"
              } w-full md:w-1/2 flex flex-col justify-center items-start px-10 md:px-16 lg:px-24 text-white`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                {item.id}
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">
                {item.title}
              </h2>

              <p className="text-lg md:text-xl mb-6">
                {item.description}
              </p>

              <a
                href={item.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl flex items-center gap-2 font-semibold hover:text-gray-300 transition duration-300"
              >
                View Project <FaArrowRight />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
