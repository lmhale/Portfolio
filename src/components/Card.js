import React from "react";
import styled from "styled-components";



const StyledContainer = styled.div`
display: flex;
padding:5px;
background: radial-gradient(circle, rgba(87,79,154,1) 0%, rgba(1,62,116,1) 100%);
flex-direction: column;

align-items: flex-start;
justify-content: space-evenly;
margin:2.5px;
flex: 1;
border: 2px solid rgba(1,62,116,1);
  `

const Title = styled.h2`
flex:1;
  color: #fff;
  font-weight: 300;
  /* text-align: center; */
`;
const Description = styled.p`
flex:1;
display: flex;
  color: #fff;
  font-weight: 300;
  padding:3px;
 
`
const ButtonContainer = styled.div `
padding-top: 2px;
    display: flex;
   justify-content: flex-start;
    
`;
const ActionButton = styled.button`
text-align: center;
  margin: 0 5px;
  padding: 2px 10px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
` 
const StyledPhoto = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;

 /* border: 1px solid white; */

`
const Card = ({title,description,imgSrc, githubLink,siteLink}) => (
    <StyledContainer>
    <StyledPhoto src={imgSrc}/>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonContainer>
    <a href={githubLink}><ActionButton>Github</ActionButton></a>
    <a href={siteLink}><ActionButton>Site</ActionButton></a>
    </ButtonContainer>
   
   </StyledContainer>
)
  


export default Card;
