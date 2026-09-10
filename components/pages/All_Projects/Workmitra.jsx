import Project from "../Project.jsx";

const Workmitra = () => {
    const AllData = [
        {
            title: "Workmitra",
            description: "A full-stack home-services booking platform connecting customers with trusted service providers.",
            description2: "The platform provides a streamlined experience for discovering services, managing bookings, handling authentication, and connecting customers with service professionals through a modern responsive interface.",
            myRole: "I worked as the Full-Stack Developer for this project, responsible for developing the frontend, backend, authentication, database integration, and core booking workflows."
        },
        {
            image: "project_images/workmitra-mock.png",
            website: "https://www.workmitra.in/",
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

export default Workmitra;