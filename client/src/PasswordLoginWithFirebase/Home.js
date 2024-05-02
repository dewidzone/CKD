import { signOut } from "firebase/auth";
import React from "react";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Home(){
    const history = useNavigate();

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/');
        });
    };

    return (
        <>
            <Navbar /> {/* Move the Navbar outside the container */}
            <div className="Container">
                <div className="home-container">
                    <div>
                        <button onClick={handleClick}>SignOut</button>
                    </div>
                    <div className="home-content">
                        <h1>Chronic Kidney Disease Prediction System</h1>
                        <p>We provide advanced prediction models to assess the risk of chronic kidney disease.</p>
                        <div className="vision-mission">
                            <h2>Vision</h2>
                            <p>"To pioneer a future where chronic kidney disease is effectively managed through cutting-edge predictive technologies, fostering proactive healthcare and enhancing overall well-being."</p>
                            <h2>Mission</h2>
                            <p>"Our mission is to revolutionize the landscape of chronic kidney disease management by delivering state-of-the-art prediction models. Through continuous innovation and collaboration with healthcare professionals, our goal is to empower individuals with timely insights, enabling early intervention and personalized care pathways. We strive to make a lasting impact on global health by reducing the burden of chronic kidney disease and improving outcomes for all."</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
