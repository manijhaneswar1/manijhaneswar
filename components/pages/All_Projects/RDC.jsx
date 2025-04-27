import Project from "../Project.jsx";
const RDC = ()=>{
    const AllData = [
        {
            title : "Research & Development Website",
            description : "\"An advanced Resource Booking System, streamlining facility reservations with a seamless user experience.\"",
            myRole : "I worked as the Web Developer and Designer for this six-month-long project as part of the RDC program at Parul University.",
            permission : "To protect View's intellectual property, I have omitted any confidential information. All resources in this case study are my own, have been made public, and/or do not necessarily reflect the values of RND Cell, Parul University"
        },
        {
            image: "project_images/rdc_mock.webp",
            website : "",
        },
    ]
    return(
        <>
            <Project
                title = {AllData[0].title}
                description = {AllData[0].description}
                myRole = {AllData[0].myRole}
                permission = {AllData[0].permission}
                image = {AllData[1].image}
                website = {AllData[1].website}
            />
        </>
    )
}
export default RDC;