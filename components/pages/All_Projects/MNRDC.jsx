import Project from "../Project.jsx";

const MNRDC = ()=>{
    const AllData = [
        {
            title : "Resource Booking Website",
            description : "\"An advanced Resource Booking System, streamlining facility reservations with a seamless user experience.\"",
            myRole : "I worked as the Web Developer and Frontend Engineer for this four-month-long project as part of the MNRDC Department at Parul University."
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
export default MNRDC;