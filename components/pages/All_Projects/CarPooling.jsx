import Project from "../Project.jsx";

const carPooling = ()=>{
    const AllData = [
        {
          "title": "Car Pooling App",
          "description": "A smart and efficient carpooling platform.",
          "description2" : "This system enhances ride-sharing by providing a seamless user experience for scheduling and managing shared rides",
          "myRole": "I worked as the Frontend Engineer for this four-month-long project as part of my End Semester Project."
        },
        {
            image : "../../../public/project_images/car_mock.png",
            website : "/",
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
export default carPooling;