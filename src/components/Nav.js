import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/Nav.css";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const navTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navTransition);
    return () => window.removeEventListener("scroll", navTransition);
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <img
          onClick={() => history.push("/")}
          className="nav-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
