import React from 'react';
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import './pageStyles.css';
import Navbar from "../Navbar"


export default function TreatmentOption() {


    const history = useNavigate()
    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }

    return (
    <> 
    <Navbar />
     
        <div className="treatment-container">
                <div className="Container">

        <div>
            <button onClick={handleClick}>SignOut</button>
        </div>

        </div>
            <h1>Treatment Option</h1>
            <div className="topic">
                <h2>Medication</h2>
                <div className="subtopic">
                    <h3>Angiotensin-Converting Enzyme (ACE) Inhibitors</h3>
                    <p>ACE inhibitors help relax blood vessels and lower blood pressure, reducing stress on the kidneys. They are often prescribed to manage hypertension and slow the progression of kidney damage.</p>
                </div>
                <div className="subtopic">
                    <h3>Angiotensin II Receptor Blockers (ARBs)</h3>
                    <p>Similar to ACE inhibitors, ARBs also help lower blood pressure and protect the kidneys from further damage by blocking the effects of angiotensin II. They are commonly used in patients with kidney disease, especially those with proteinuria.</p>
                </div>
                <div className="subtopic">
                    <h3>Diuretics</h3>
                    <p>Diuretics, also known as water pills, help remove excess fluid from the body by increasing urine production. They are often prescribed to manage fluid retention and control blood pressure in individuals with kidney disease.</p>
                </div>
            </div>
            <div className="topic">
                <h2>Dietary Changes</h2>
                <div className="subtopic">
                    <h3>Low Protein Diet</h3>
                    <p>A low-protein diet can help reduce the workload on the kidneys, particularly in individuals with advanced kidney disease. Limiting protein intake can help manage uremia and delay the need for dialysis.</p>
                </div>
                <div className="subtopic">
                    <h3>Low Sodium Diet</h3>
                    <p>Reducing sodium intake can help control blood pressure and prevent fluid retention, which is beneficial for individuals with kidney disease. It may also help slow down the progression of kidney damage.</p>
                </div>
                <div className="subtopic">
                    <h3>Phosphorus Restriction</h3>
                    <p>Phosphorus restriction is important for individuals with kidney disease, as high phosphorus levels can lead to mineral and bone disorders. Limiting phosphorus intake by avoiding processed foods and certain beverages can help manage kidney disease.</p>
                </div>
            </div>
        </div>
    </>    
    );
}
