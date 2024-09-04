// C:\react-js\myreactdev\src\App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/Landingpage"; // Remove the ".js" extension
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import DApp from "./component/device/DApp";
import QRApp from "./component/qr/QRApp";
import TableData from "./component/status/VApp";
import LogoutPage from "./pages/logout";
import Signup from "./pages/signup";
import Signin from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="vh-100 gradient-custom">
              <div className="container">
                <LandingPage />{" "}
              </div>
            </div>
          }
        />
        {/* <Route
          path="/login"
          element={
            <div className="vh-100 gradient-custom">
              <div className="container">
                <LoginPage />{" "}
              </div>
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="vh-100 gradient-custom">
              <div className="container">
                <SignupPage />{" "}
              </div>
            </div>
          }
        /> */}
        <Route
          path="/forgot_password"
          element={
            <div className="vh-100 gradient-custom">
              <div className="container">
                <ForgotPasswordPage />{" "}
              </div>
            </div>
          }
        />
        <Route path="/device" element={<DApp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />


        <Route path="/add-device" element={<QRApp />} />
        <Route path="/Device-Status/:deviceID" element={<TableData />} />
        <Route path="/logout" element={<LogoutPage />} />



      </Routes>
    </Router>
  );
}

export default App;
