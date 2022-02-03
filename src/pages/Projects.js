import React, {useEffect} from "react";
import styled from "styled-components";
import isignCover from "../assets/isign_cover.png";

const Project = styled.div`
    display: flex;
    color:white;
    flex-basis: 220px;
    padding: 5px;
    margin:5px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    z-index: 4;
   
  
   
`
const ProjectHeader = styled.h1`
    font-size: 20px;
    margin-bottom: 5px;
    /* flex:1; */
   
`;
const Image = styled.img`
  width: 100%; 
  /* flex:1; */
 height: 40%;
 
`;

const Projects =()=> {
    useEffect(() => {
        document.title = 'Projects';
    });
    return (
        <>
        <Project>
        <ProjectHeader>ClipSrc</ProjectHeader>
        <Image src={(require(`../assets/isign_cover.png`))}></Image>
        </Project>
        <Project>
        <ProjectHeader>iSign</ProjectHeader>
        <Image src={(require(`../assets/isign_cover.png`))}></Image>
        </Project>
        <Project>
        <ProjectHeader>
        Sally's Seashells
        </ProjectHeader>
        <Image src={(require(`../assets/sallys_seashells.png`))}></Image>
        </Project>
        </>
        
    )
}

export default Projects;