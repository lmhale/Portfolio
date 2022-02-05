import React from "react";
import styled from "styled-components";
import { FaGithub, FaGlobe} from "react-icons/fa";

const StyledContainer = styled.div`

display: flex;
padding:5px;
background: radial-gradient(circle, rgba(87,79,154,1) 0%, rgba(1,62,116,1) 100%);
flex-direction: column;

justify-content: space-around;
margin:2.5px;

border: 2px solid rgba(1,62,116,1);
border-radius: .5%;
  `

const Title = styled.h2`

  color: #fff;
  font-weight: 300;
  text-align: center; 
  
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Description = styled.p`
  color: #fff;
  font-weight: 300;
  padding:3px;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
 
`
const ButtonContainer = styled.div `
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
    margin-top: 5px;    
`;
const ActionButton = styled.button`

  margin: 0 5px;
  padding: 3px 10px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
    color:lightpink;
  }
` 
const StyledPhoto = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;
  margin-bottom: 5px;

 /* border: 1px solid white; */

`
const Card = ({title,description,imgSrc, githubLink,siteLink}) => (
    <StyledContainer>
    <StyledPhoto src={imgSrc}/>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonContainer>
    <a href={githubLink}target="_blank"><ActionButton><FaGithub/> Github</ActionButton></a>
    <a href={siteLink}target="_blank"><ActionButton><FaGlobe/> Site</ActionButton></a>
    </ButtonContainer>
   
   </StyledContainer>
)
  


export default Card;
