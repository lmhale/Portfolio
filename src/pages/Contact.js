import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

let service_email = process.env.REACT_APP_SERVICE_EMAIL;
let template_id = process.env.REACT_APP_TEMPLATE_ID;
let user_id = process.env.REACT_APP_USER_ID;
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_email,template_id , form.current, user_id)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;