import Project from "../Project.jsx";

const LAVVI = () => {
    const AllData = [
        {
            title: "LAVVI",
            description: "A modern and visually focused website created for LAVVI.",
            description2: "The project was designed to establish a strong digital presence through a clean interface, responsive layouts, engaging visuals, and a smooth user experience.",
            myRole: "I worked as the Web Developer for this project as part of my Freelance Journey."
        },
        {
            image: "project_images/lavvi-mock.png",
            website: "https://www.lavvistore.com/",
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

export default LAVVI;