import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import './ContactUs.css';
import Navbar from "../Navbar";

function ContactUs() {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then(val => {
      console.log(val, "val");
      history('/');
    });
  };

  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const data = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();
    const { Name, Email, Subject, Message } = userData;

  // Check if any field is empty
  if (!Name || !Email || !Subject || !Message) {
    alert('Please fill in all fields.');
    return;
  }

    const option = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message
      })
    };

    const res = await fetch('https://contact-us-efa3f-default-rtdb.firebaseio.com/Messages.json', option);
    console.log(res);

    if (res.ok) {
      alert('Message Sent!');
      // Clear all fields after sending the message
      setUserData({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
      });
    }
  };

  return (
    <>
     <Navbar />
    
      <div className="contact-container">
        <div className="Container">
          <div>
            <button onClick={handleClick}>SignOut</button>
          </div>
          <h1 align='center'>Contact Us</h1>
          <p className="contact-message">Thank you for your interest in reaching out to us. We value your feedback, inquiries, and suggestions. Please feel free to contact us using the information provided below or by filling out the contact form.</p>
          <div className='container-contactus'>
            <div className='contact-box'>
              <form method='POST'>
                <input type='text' name='Name' value={userData.Name} placeholder='Enter your Full Name' autoComplete='off' onChange={data} />
                <input type='text' name='Email' value={userData.Email} placeholder='Enter your Email' autoComplete='off' onChange={data} />
                <input type='text' name='Subject' value={userData.Subject} placeholder='Subject of Message' autoComplete='off' onChange={data}  />
                <textarea value={userData.Message} name='Message' placeholder='Your Message' autoComplete='off' onChange={data}  />
                <button type="submit" onClick={send}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
