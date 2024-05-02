import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // Import the CSS file

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(database, emailVal)
      .then((data) => {
        alert("check your email");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div>
    <h1>Chronic Kidney Disease Prediction System</h1>
    <p align='center'>We provide advanced prediction models to assess the risk of chronic kidney disease.</p>
    <div className="forgot-password-container">
       

      <h2>Forgot Password</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button className="btn-reset">Reset Password</button>
      </form>
    </div>
    </div>
  );
}

export default ForgotPassword;
