import React from "react";
import "../styles/Login.css";
import { useState } from "react";
import SignupScreen from "./SignupScreen";

function Login() {
  const [signIn, setSignIn] = useState(null);
  return (
    <div className="login">
      <div className="login-background">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button className="login-button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login-gradient" />
      </div>
      <div className="login-body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more</h1>
            <h2>Watch anywhere, Cancle at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login-input">
              <form>
                <input type="eamil" placeholder="Email Address" />
                <button
                  className="login-getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
