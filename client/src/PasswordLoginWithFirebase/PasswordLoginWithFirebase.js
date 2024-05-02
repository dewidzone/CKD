import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import HomeScreen from "./Home"; 
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./component/PrivateRoute"


function PasswordLoginWithFirebase(){
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/home" element={<HomeScreen/>} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                    <Route path='/privateroute' element={<PrivateRoute />} />  
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default PasswordLoginWithFirebase;