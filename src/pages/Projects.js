import React, {useEffect} from "react";
import styled from "styled-components";
import Card from "../components/Card";
import isignCover from "../assets/isign_cover.png";

const Project = styled.div`
    display: flex;
    color:white;
    flex-basis: 260px;

    padding: 5px;
    /* margin:5px; */
    justify-content: space-evenly;
    align-items: flex-start;

    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
    border: 1px solid black;
`;
 
const card_data = [
{
    id:1,
    title:'iSign',
    description:'An interactive sign language app built with machine learning.',
    img_src:require("../assets/isign_cover.png"),
    github_link:"https://github.com/02-cs-2109-the-lan-before-time/iSign1.0",
    site_link:"https://isign-43075.web.app/"
},

{
    id:3,
    title:'Sally\'s Seashells',
    description:"A mock ecommerce site for purchasing shells.",
    img_src:require("../assets/sallys_seashells.png"),
    github_link:"https://github.com/everyday-im-buffering/sallys_seashells",
    site_link:"https://sallys-seashells.herokuapp.com/"
},
{
    id:2,
    title:'ClipSrc',
    description:"A chrome extension for saving and organizing text and image snippets as you browse.",
    img_src:require("../assets/clipsrc_cover.png"),
    github_link:"https://github.com/lmhale/ClipSrc",
    site_link:""
},

]

const Projects =()=> {
    useEffect(() => {
        document.title = 'Projects';
    });
    return (
        <>
        
      {card_data.map(card => {
        return (
            <Project>
            <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imgSrc={card.img_src}
            githubLink={card.github_link}
            siteLink={card.site_link}
            />
            </Project>
           
        )
})};
   
        </>
        
    )
}

export default Projects;