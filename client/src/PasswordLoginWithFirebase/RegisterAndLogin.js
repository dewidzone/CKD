import React, { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./RegisterAndLogin.css";

function RegisterAndLogin() {
  useEffect(() => {
    // Change the title when the component mounts
    document.title = "Chronic Kidney Disease Prediction System";
  }, []);

  const [user, setUser] = useState({});
  const navigate = useNavigate(); // Initializing the useNavigate hook

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    navigate('/home'); // Navigating to the "/home" route
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

/* eslint-disable no-undef */

useEffect(() => {
  // Load and initialize Google API library
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.onload = () => {
    google.accounts.id.initialize({
      client_id: "68699901023-rh4pvjqtvdv1ttgs44cio9pbogvue0du.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );
  };
  document.body.appendChild(script);
}, [navigate]);

/* eslint-enable no-undef */



  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSignUp = () => {
    setLogin(false);
  };

  const handleSignIn = () => {
    setLogin(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (login) {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          alert("Login Successful!"); // Alert for successful login
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    } else {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          alert("Registration Successful!"); // Alert for successful registration
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="registeandlogin-container">
      <h1>Chronic Kidney Disease Prediction System</h1>
      <p className="text-center">
        We provide advanced prediction models to assess the risk of chronic kidney disease.
      </p>

      <div className="buttons-container">
        <button className={login ? "button" : "button activeColor"} onClick={handleSignUp}>
          SignUp
        </button>
        <button className={login ? "button activeColor" : "button"} onClick={handleSignIn}>
          SignIn
        </button>
      </div>
      
      <h1 className="text-center">{login ? "SignIn" : "SignUp"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input className="form-control" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className="form-control" name="password" type="password" placeholder="Password" />
        </div>
        <p className="text-center" onClick={handleReset}>
          Forgot Password?
        </p>
        <button className="btn btn-primary btn-block">
          {login ? "SignIn" : "SignUp"}
        </button>
        
        <div id="signInDiv"></div>
      
        {
          Object.keys(user).length !== 0 &&
          <button className="google-btn" onClick={(e) => handleSignOut(e)}>Sign Out</button>
        }
        { 
          Object.keys(user).length !== 0 &&
          <div className="user-info-container">
            <div className="user-info">
              <img src={user.picture} alt="User Avatar" />
              <h3>{user.name}</h3>
            </div>
          </div>
        }
    
      </form>

    </div>
  );
}

export default RegisterAndLogin;
