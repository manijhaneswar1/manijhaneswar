import Project from "../Project.jsx";

const PLAAM = () => {
    const AllData = [
        {
            title: "PLAAM",
            description: "A modern e-commerce website built to create a strong digital presence for PLAAM.",
            description2: "The project focuses on delivering a premium and engaging online shopping experience with a clean interface, responsive design, and smooth user interactions.",
            myRole: "I worked as the Web Developer for this project as part of my Freelance Journey."
        },
        {
            image: "project_images/plaam-mock.png",
            website: "https://plaam.in/",
        },
    ];

    return (
        <>
            <Project
                title={AllData[0].title}
                description={AllData[0].description}
                description2={AllData[0].description2}
                myRole={AllData[0].myRole}
                image={AllData[1].image}
                website={AllData[1].website}
            />
        </>
    );
};

export default PLAAM;