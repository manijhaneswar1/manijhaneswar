import Project from "../Project.jsx";

const Dden = ()=>{
    const AllData = [
        {
          "title": "DDEN",
          "description": "A fashion-tech platform that empowers designers by connecting creativity with digital innovation.",
          "description2" : "A fashion-tech platform dedicated to empowering designers and emerging brands through digital innovation.",
          "myRole": "I worked as the Web Engineer for this seven-month-long project as part of my Freelance Journey."
        },
        {
            image : "project_images/dden-mock.webp",
            website : "https://www.dden.in/",
        },
    ]
    return(
        <>
            <Project
                title = {AllData[0].title}
                description = {AllData[0].description}
                description2 = {AllData[0].description2}
                myRole = {AllData[0].myRole}
                image = {AllData[1].image}
                website = {AllData[1].website}
            />
        </>
    )
}
export default Dden;