import React from 'react';
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import './About.css'; // Assuming the CSS file is named ContactUs.css

export default function AboutUs() {
    const history = useNavigate();

    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, "val");
            history('/');
        });
    };

    return (
        <>
            <Navbar />
            <div className="about-container">
                <div>
                    <button onClick={handleClick}>SignOut</button>
                </div>
                
                <div className="about-section system-description">
                    <h2>About Our System</h2>
                    <p>Our Chronic Kidney Disease Prediction System is a cutting-edge platform that utilizes advanced machine learning algorithms to analyze various factors and provide accurate assessments of kidney function and potential risks.</p>
                    <p>With our system, users can receive personalized predictions and insights about their kidney health, empowering them to take proactive measures for early intervention and personalized care.</p>
                    <p>Our platform aims to revolutionize kidney disease management by leveraging data-driven approaches to improve diagnosis, treatment, and patient outcomes.</p>
                    <p>Whether you're a healthcare professional seeking innovative solutions or an individual interested in monitoring your kidney health, our system offers comprehensive tools and resources to support your needs.</p>
                </div>
                <div className="about-section relevant-details">
                    <h2>Our Commitment</h2>
                    <p>Our system incorporates state-of-the-art predictive technologies, constantly updated with the latest medical research and advancements in kidney disease management.</p>
                    <p>We prioritize user privacy and data security, ensuring that all information provided is encrypted and handled with the utmost confidentiality.</p>
                    <p>Additionally, our team of experts is dedicated to continuous improvement, collaborating with healthcare professionals to enhance the accuracy and effectiveness of our prediction models.</p>
                    <p>We are committed to fostering a collaborative environment where feedback from users and healthcare professionals is valued and utilized to drive innovation and excellence in kidney disease prediction and management.</p>
                </div>
            </div>
        </>
    );
}
