import React from "react";
import styled, { createGlobalStyle, css } from 'styled-components';

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const FormContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
 height: 100vh; 
padding: 0 20pc;

`;
const StyledForm = styled.form`
     width: 100%;
     max-width: 400px;
     padding: 40px;
     background-color: #fff;
     border-radius: 10px;
     box-sizing: border-box;
     box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`;
const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
`;
const StyledHeader = styled.h2`
    margin-top: -2px;
    padding-bottom:5px;
    text-align: center;
`;

const Form = React.forwardRef((props,ref) => {
    return (
        <FormContainer>
        <StyledForm ref={ref} {...props} >
        <StyledHeader>Contact Form</StyledHeader>
        <label htmlFor="name">Name</label>
       <StyledInput type="text" name="name" />
       <label htmlFor="email">Email</label>
       <StyledInput type="email" name="email" />
        <label htmlFor="message">Message</label>
        <StyledTextArea type="text" name="message"/>
        <StyledButton value="Send" type="submit">Send</StyledButton>
        </StyledForm>
        </FormContainer>
    )
});    


export default Form