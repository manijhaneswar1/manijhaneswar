import Project from "../Project.jsx";

const MNRDC = ()=>{
    const AllData = [
        {
            title : "Resource Booking Website",
            description : "\"An advanced Resource Booking System, streamlining facility reservations with a seamless user experience.\"",
            myRole : "I worked as the Web Developer and Frontend Engineer for this four-month-long project as part of the MNRDC Department at Parul University.",
            permission : "To protect View's intellectual property, I have omitted any confidential information. All resources in this case study are my own, have been made public, and/or do not necessarily reflect the values of Micro Nano RDC, Parul University"
        },
        {
            video : "https://www.youtube.com/watch?v=KRUik904s2U",
            website : "https://micronanornd.paruluniversity.ac.in/",
        },
    ]
    return(
        <>
            <Project
                title = {AllData[0].title}
                description = {AllData[0].description}
                myRole = {AllData[0].myRole}
                permission = {AllData[0].permission}
                video = {AllData[1].video}
                website = {AllData[1].website}
            />
        </>
    )
}
export default MNRDC;