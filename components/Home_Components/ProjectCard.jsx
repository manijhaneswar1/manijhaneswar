import { useState, useRef } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: "01",
    title: "RDC Website",
    description:
      "A professional research and development platform designed to showcase university research, innovation, and academic initiatives.",
    Link: "/rdc",
    image: "project_images/RDC_bg.webp",
  },
  {
    id: "02",
    title: "Car Pooling App",
    description:
      "A smart carpooling platform that simplifies ride sharing through an intuitive and efficient digital experience.",
    Link: "/car-pooling",
    image: "project_images/car_pooling_bg-v.mp4",
  },
  {
    id: "03",
    title: "Resource Booking",
    description:
      "A resource management platform that streamlines facility reservations and provides an efficient booking experience.",
    Link: "/mnrdc",
    image: "project_images/resbook_bg.webp",
  },
  {
    id: "04",
    title: "DDEN",
    description:
      "A fashion-tech platform connecting designers and emerging brands with digital innovation and creative opportunities.",
    Link: "/dden",
    image: "project_images/mock_video_2.mp4",
  },
  {
    id: "05",
    title: "PLAAM",
    description:
      "A premium e-commerce website built to strengthen PLAAM's digital presence and deliver a smooth online shopping experience.",
    Link: "https://www.plaam.in/",
    image: "project_images/plaam-mock.png",
  },
  {
    id: "06",
    title: "SIRI Bangles",
    description:
      "An elegant jewellery e-commerce website designed to showcase bridal bangles and provide a seamless shopping experience.",
    Link: "https://siribridalbangles.in",
    image: "project_images/siribangles-mock.png",
  },
  {
    id: "07",
    title: "LAVVI",
    description:
      "A modern e-commerce website created for LAVVI with a clean visual identity and engaging online shopping experience.",
    Link: "https://lavvistore.com/",
    image: "project_images/lavvi-mock.png",
  },
  {
    id: "08",
    title: "Workmitra",
    description:
      "A full-stack home-services platform connecting customers with trusted service professionals through seamless booking workflows.",
    Link: "https://workmitra.in/",
    image: "project_images/workmitra-mock.png",
  },
];

/**
 * ShowMoreButton
 * - Magnetic pull toward the cursor within a radius
 * - Spinning conic-gradient ring, only visible on hover
 * - Radial spotlight that tracks the cursor position
 * - Click sends out a ripple + the chevron flips with a spring
 */
const ShowMoreButton = ({ expanded, onClick }) => {
  const btnRef = useRef(null);
  const [style, setStyle] = useState({});
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    // spotlight position, in %
    setSpot({
      x: (relX / rect.width) * 100,
      y: (relY / rect.height) * 100,
    });

    // magnetic pull: move the button a fraction toward the cursor
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = relX - cx;
    const dy = relY - cy;
    const pull = 0.25;
    setStyle({
      transform: `translate(${dx * pull}px, ${dy * pull}px)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "translate(0px, 0px)" });
  };

  const handleClick = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const id = Date.now();
    const ripple = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
    onClick();
  };

  return (
    <div className="show-more-wrap">
      <button
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          ...style,
          "--spot-x": `${spot.x}%`,
          "--spot-y": `${spot.y}%`,
        }}
        className="show-more-btn"
        aria-expanded={expanded}
      >
        <span className="show-more-ring" aria-hidden="true" />
        <span className="show-more-spot" aria-hidden="true" />
        {ripples.map((r) => (
          <span
            key={r.id}
            className="show-more-ripple"
            style={{ left: r.x, top: r.y }}
          />
        ))}
        <span className="show-more-label">
          {expanded ? "Show Less" : "Show More Projects"}
        </span>
        <span className={`show-more-icon ${expanded ? "is-flipped" : ""}`}>
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <style>{`
        .show-more-wrap {
          display: flex;
          justify-content: center;
          padding: 3rem 0;
          background: #000;
        }

        .show-more-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.25rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.02);
          color: #fff;
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          cursor: pointer;
          overflow: hidden;
          isolation: isolate;
          transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1),
            border-color 0.35s ease, background 0.35s ease;
        }

        .show-more-btn:hover {
          border-color: rgba(255, 255, 255, 0.65);
        }

        .show-more-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }

        /* Spinning conic ring, hidden until hover */
        .show-more-ring {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          z-index: -2;
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            #fff 12%,
            transparent 28%
          );
          opacity: 0;
          animation: spin-ring 2.4s linear infinite;
          transition: opacity 0.35s ease;
          -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .show-more-btn:hover .show-more-ring {
          opacity: 1;
        }

        @keyframes spin-ring {
          to {
            transform: rotate(360deg);
          }
        }

        /* Spotlight that tracks the cursor */
        .show-more-spot {
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          opacity: 0;
          background: radial-gradient(
            120px circle at var(--spot-x) var(--spot-y),
            rgba(255, 255, 255, 0.16),
            transparent 70%
          );
          transition: opacity 0.35s ease;
        }

        .show-more-btn:hover .show-more-spot {
          opacity: 1;
        }

        .show-more-btn:active {
          transform: scale(0.97) !important;
        }

        .show-more-label {
          position: relative;
        }

        .show-more-icon {
          position: relative;
          display: inline-flex;
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .show-more-btn:hover .show-more-icon:not(.is-flipped) {
          transform: translateY(3px);
        }

        .show-more-icon.is-flipped {
          transform: rotate(180deg);
        }

        .show-more-btn:hover .show-more-icon.is-flipped {
          transform: rotate(180deg) translateY(3px);
        }

        /* Click ripple */
        .show-more-ripple {
          position: absolute;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          margin-top: -4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.55);
          transform: scale(0);
          animation: ripple-burst 0.7s ease-out forwards;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes ripple-burst {
          to {
            transform: scale(22);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .show-more-ring {
            animation: none;
          }
          .show-more-btn,
          .show-more-icon,
          .show-more-ripple {
            transition: none;
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

const ProjectCard = () => {
  const [showMore, setShowMore] = useState(false);

  // Desired first four projects:
  // DDEN, Workmitra, Resource Booking, PLAAM
  const featuredProjects = [
    projectsData[3], // DDEN
    projectsData[7], // Workmitra
    projectsData[2], // Resource Booking
    projectsData[4], // PLAAM
  ];

  const remainingProjects = projectsData.filter(
    (project) =>
      !featuredProjects.some((featured) => featured.id === project.id)
  );

  const visibleProjects = showMore
    ? [...featuredProjects, ...remainingProjects]
    : featuredProjects;

  return (
    <div className="flex flex-col">
      {visibleProjects.map((item, index) => {
        const isEven = index % 2 === 0;
        const isVideo = item.image.endsWith(".mp4");
        const isExternal = item.Link.startsWith("http");

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
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">
                {item.title}
              </h2>

              <p className="text-lg md:text-xl mb-6">{item.description}</p>

              {/* Project Link */}
              {isExternal ? (
                <a
                  href={item.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl flex items-center gap-2 font-semibold hover:text-gray-300 transition duration-300"
                >
                  View Project <FaArrowRight />
                </a>
              ) : (
                <Link
                  to={item.Link}
                  className="text-lg md:text-xl flex items-center gap-2 font-semibold hover:text-gray-300 transition duration-300"
                >
                  View Project <FaArrowRight />
                </Link>
              )}
            </div>
          </div>
        );
      })}

      {/* Show More / Show Less Button */}
      <ShowMoreButton expanded={showMore} onClick={() => setShowMore(!showMore)} />
    </div>
  );
};

export default ProjectCard;