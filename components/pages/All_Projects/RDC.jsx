import Project from "../Project.jsx";

const RDC = ()=>{
    const AllData = [
        {
            title : "Research & Development Website",
            description : "\"An advanced Resource Booking System, streamlining facility reservations with a seamless user experience.\"",
            myRole : "I worked as the Web Developer and Designer for this six-month-long project as part of the RDC program at Parul University."
        },
        {

        },
    ]
    return(
        <>
            <Project
                title = {AllData[0].title}
                description = {AllData[0].description}
                myRole = {AllData[0].myRole}
            />
        </>
    )
}
export default RDC;