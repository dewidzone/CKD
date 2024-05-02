import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import axios from 'axios';
import './prediction.css'; 

export default function Prediction() {

  const history = useNavigate();

  const handleClick = () => {
      signOut(database).then(val => {
          console.log(val, "val");
          history('/');
      });
  };



  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post('http://localhost:5000/predict', data);
      setPrediction(response.data.prediction === 1 ? 'The models analysis indicates a high likelihood of chronic kidney disease based on the presented data.' : 'The models analysis indicates that the patient is unlikely to have chronic kidney disease.');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    
    document.querySelectorAll('input').forEach(input => input.value = '');
    
    document.querySelector('select').selectedIndex = 0;
    
    setPrediction('');
  };

  return (
    <>
    <div className="navbar-fixed">
    <Navbar />
    
           </div>
           <button className="sign-out-btn" onClick={handleClick}>SignOut</button>
           <div className="container">
        <div className="prediction-container">
          <h1>Chronic Kidney Disease Prediction System</h1>
            <ul className="bullet-list">
              <li className="bullet-item">Discover valuable insights into your kidney health with our advanced prediction tool.</li>
              <li className="bullet-item">Gain a deeper understanding of your kidney function and potential risks.</li>
              <li className="bullet-item">Ready to take control of your kidney health? Start by completing our comprehensive questionnaire.</li>
          </ul>
        </div>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" min="1" max="120" required />
        <label htmlFor="al">Albumin level in Urine:</label>
        <input type="number" name="al" step="0.1" min="0.0" max="5.0" required />

        <label htmlFor="su">Sugar level in Urine:</label>
        <input type="number" name="su" step="0.1" min="0.0" max="5.0" required />

        <label htmlFor="bgr">Blood glucose random level:</label>
        <input type="number" name="bgr" step="0.1" min="0.0" max="500.0" required />

        <label htmlFor="bu">Blood urea level:</label>
        <input type="number" name="bu" step="0.1" min="0.0" max="400.0" required />

        <label htmlFor="sc">Serum creatinine level:</label>
        <input type="number" name="sc" step="0.1" min="0.0" max="10.0" required />

        <label htmlFor="sod">Sodium level in blood:</label>
        <input type="number" name="sod" step="0.1" min="0.0" max="200.0" required />

        <label htmlFor="pcv">Packed cell volume:</label>
        <input type="number" name="pcv" step="0.1" min="0.0" max="100.0" required />

        <label htmlFor="rc">Red blood cell count:</label>
        <input type="number" name="rc" step="0.1" min="0.0" max="100.0" required />

        <label htmlFor="htn">Hypertension:</label>

        <select name="htn" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

          <button type="submit">Predict</button>
       
          <button onClick={handleClear}>Clear</button>
        </form>
      <div className="result">{prediction}</div>
    </div>
  </>
  );
}
