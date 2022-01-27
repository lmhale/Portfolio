import React,{ useEffect } from "react";


 const About = () => {
    useEffect(() => {
        document.title = 'About';
    });
    return(
        <div>
        This is an about me section.
        </div>
       
       
    )
}
export default About