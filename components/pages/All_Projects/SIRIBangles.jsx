import Project from "../Project.jsx";

const SIRIBangles = () => {
    const AllData = [
        {
            title: "SIRI Bangles",
            description: "A premium jewellery e-commerce website created for SIRI Bangles.",
            description2: "The website combines an elegant visual experience with a seamless shopping journey, featuring responsive design, product presentation, customer interaction, WhatsApp integration, and Razorpay payment integration.",
            myRole: "I worked as the Web Developer for this project as part of my Freelance Journey."
        },
        {
            image: "project_images/siribangles-mock.png",
            website: "https://www.siribangles.in/",
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

export default SIRIBangles;