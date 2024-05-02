import React from 'react';
import Home from "./PasswordLoginWithFirebase/Home"
import Prediction from "./PasswordLoginWithFirebase/Prediction"
import TreatmentOption from "./PasswordLoginWithFirebase/TreatmentOption"
import AboutUs from "./PasswordLoginWithFirebase/AboutUs"
import ContactUs from "./PasswordLoginWithFirebase/ContactUs"
import ChatBot from 'react-simple-chatbot';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./PasswordLoginWithFirebase/RegisterAndLogin";
import ForgotPassword from "./PasswordLoginWithFirebase/ForgotPassword";
import './styles.css';


function App() {
  
  const [minimized, setMinimized] = useState(false);

  const handleToggleMinimize = () => {
    setMinimized(!minimized);
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello There!  Welcome to Chronic Kidney Disease Prediction system",
      trigger: "Help",
    },

    {
      id: "Help",
      message: "Do you want a guidance?",
      trigger: "selection",
    },
    {
      id: "selection",
      options: [
        { value: "Yes", label: "Yes", trigger: "Yes" },
        { value: "No", label: "No", trigger: "No" },
      ],
    },

    {
      id: "No",
      message: "If you need assistance, feel free to ask!",
      end: true
    },
    {
      id: "Yes",
      message: "It's really glad to assist you!",
      trigger: "selection2",
    },

    {
      id: "selection2",
      options: [
        
        { value: "I don't have an account", label: "I don't have an account", trigger: "I don't have an account"},
        { value: "What are the facilities that the system provides.", label: "What are the facilities that the system provides.", trigger: "What are the facilities that the system provides."},
        { value: "How can i get kidney disease prediction Through this system", label: "How can i get kidney disease prediction Through this system", trigger: "How can i get kidney disease prediction Through this system"},
      ],
    },

    {
      id: "I don't have an account",
      message: "If you don't have an account, then click on 'Register' button",
      trigger: "step1",
    },

    {
      id: "step1",
      message: "create username & password", 
      trigger: "step2",
    },
    {
      id: "step2",
      message: "Then click on 'submit' button.",
      end: true,
    },
    

    {
      id: "What are the facilities that the system provides.",
      message: "Chronic kidney disease prediction panel",
      trigger: "Facility2",
    },
    {
      id: "Facility2",
      message: "Awareness of Chronic Kidney Disease",
      trigger: "Facility3",
    },
    {
      id: "Facility3",
      message: "Treatment Option for Chronic Kidney Disease",
      end: true,
    },

    {
      id: "How can i get kidney disease prediction Through this system",
      message: "First of all, login into the system by using username & password", 
      trigger: "step3",
    },

    {
      id: "step3",
      message: "if you don't have an account get registered",
      trigger: "step4",
    },
    {
      id: "step4",
      message: "then you have to login into the system", 
      trigger: "step5",
    },

    {
      id: "step5",
      message: "and go to the tab called get prediction",
      trigger: "step6",
    },
    {
    id: "step6",
    message: "then after fill the form and click on the 'Prediction' button.",
    end: true,
    },

  ];

   return (
  <>   

  
    <div className="Container">
        <Routes>
            <Route path="/" element={<RegisterAndLogin/>} />
            <Route path="/reset" element={<ForgotPassword/>} />
            <Route path="/home" element={<Home />} />  
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/treatmentoption" element={<TreatmentOption />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            
        </Routes>
    </div>



    <div style={styles.chatbotContainer}>
      {!minimized && (
        <ChatBot steps={steps} botAvatar="/botavatar.png" />
      )}
      <Button
        icon={minimized ? 'window maximize' : 'window minimize'}
        onClick={handleToggleMinimize}
        style={styles.minimizeButton}
      />
    </div>
  
</>
    );
}
const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 9999, // Ensures the chatbot appears above other elements
  },
  minimizeButton: {
    position: 'absolute',
    top: 0, // Move the button to the top
    right: 0,
    zIndex: 10000, // Ensures the button appears above the chatbot
    height: '20px', // Adjust the height
    width: '50px', // Adjust the width
  },
};  
        export default App;