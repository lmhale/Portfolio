import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from '../components/Form'
let service_email = process.env.REACT_APP_SERVICE_EMAIL;
let template_id = process.env.REACT_APP_TEMPLATE_ID;
let user_id = process.env.REACT_APP_USER_ID;
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("form",form)
    emailjs.sendForm(service_email,template_id , form.current, user_id)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  form.current.reset();
  };

  return (
    <>
    <Form ref={form} onSubmit={sendEmail}/>
    </>
  
  );
};

export default Contact;