import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar(props) {
  const salom = () => {
    let menu = document.querySelector(".menu");
    let boxes = document.querySelector(".boxes");
    boxes.classList.toggle("active");
    menu.classList.toggle("active");
  };

  const darkMode = () => {
    checkMode();
  };
  function checkMode() {
    // let dark = document.querySelector(".dark");
    console.log("iwladi");
    if (darkMode.checked) {
      darkModeOn();
      console.log("oqardi");
    } else {
      console.log("qoraydi");
      darkModeOff();
    }
  }
  function darkModeOn() {
    document.body.classList.add("dark-mode");
  }
  function darkModeOff() {
    document.body.classList.remove("dark-mode");
  }

  return (
    <div className="sidebar">
      <div className="boxes">
        <div className="box">
          <img
            onClick={salom}
            className="menu"
            src="/images/menu (1).png"
            alt="menu"
          />
        </div>
        <hr />
        <div className="box box1">
          <Link className="link" to="/">
            <img className="img" src="/images/home.png" alt="home" />
            <h1>Home</h1>
          </Link>
        </div>
        <hr />
        <div className="box box1">
          <Link className="link" to="/about">
            <img className="img" src="/images/user.png" alt="rasm2" />
            <h1>About</h1>
          </Link>
        </div>
        <hr />
        <div className="box box1">
          <Link className="link" to="/resume">
            <img className="img" src="/images/resume.png" alt="rasm3" />
            <h1>Resume</h1>
          </Link>
        </div>
        <hr />
        <div className="box box1">
          <Link className="link" to="/contact">
            <img className="img" src="/images/placeholder.png" alt="rasm4" />
            <h1>Contact</h1>
          </Link>
        </div>
        <hr />
        <div className="box box1">
          <img
            onClick={darkMode}
            className="dark"
            src="/images/placeholder.png"
            alt="rasm4"
          />
          <h1>Dark rejim</h1>
        </div>
        <hr />
      </div>
    </div>
  );
}
