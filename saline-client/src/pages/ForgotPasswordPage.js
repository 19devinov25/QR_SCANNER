// C:\react-js\myreactdev\src\pages\ForgotPasswordPage.js
import React, { useState } from "react";
import axios from 'axios';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const resetPassword = () => {
    if (email.length === 0) {
      alert('Email has been left blank!');
    } else {
      axios.post('https://salineserver.onrender.com/forgot_password', {
        email: email,
      })
      .then(function (response) {
        console.log(response);
        alert('Password reset email sent!');
      })
      .catch(function (error) {
        console.log(error, 'error');
        if (error.response && error.response.status === 404) {
          alert("User with the provided email not found");
        }
      });
    }
  }

  return (
    <div>
      <div className="container h-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              {/* Your image or content for the "Forgot Password" page */}
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Forgot Your Password?</p>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter your email address" />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg" onClick={resetPassword} >Reset Password</button>
                  {/* You can add a link to navigate back to the login page */}
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
