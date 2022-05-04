import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar(props) {
  const [isdark, setIsDark] = useState(true);
  const salom = () => {
    let menu = document.querySelector(".menu");
    let boxes = document.querySelector(".boxes");
    boxes.classList.toggle("active");
    menu.classList.toggle("active");
  };

  const light = () => {
    document.body.classList.toggle("dark-theme");
    setIsDark(false);
  };
  const dark = () => {
    document.body.classList.toggle("dark-theme");
    setIsDark(true);
  };
  const cliced = () => {
    let boxes1 = document.querySelector(".boxes");
    // if (window.innerWidth < 576) {
    //   if (boxes1.classList.value === "boxes active") {
    //     boxes1.style.width = "70px";
    //   }
    //   // else if (boxes1.classList.value === "boxes active") {
    //   //   boxes1.style.width = "70px";
    //   // }
    // }
    console.log(boxes1.classList.value);
    // salom();
  };

  return (
    <div className="sidebar">
      <div className="boxes">
        <div className="box box2">
          <img
            onClick={salom}
            className="menu"
            src="/images/menu (1).png"
            alt="menu"
          />
          <select>
            <option value="Uz">Uz</option>
            <option value="Eng">Eng</option>
            <option value="Rus">Rus</option>
          </select>
        </div>
        <hr />
        <div onClick={cliced} className="box box1">
          <Link className="link" to="/">
            <img className="img" src="/images/home.png" alt="home" />
            <h1>Home</h1>
          </Link>
        </div>
        <hr />
        <div onClick={cliced} className="box box1">
          <Link className="link" to="/about">
            <img className="img" src="/images/user.png" alt="rasm2" />
            <h1>About</h1>
          </Link>
        </div>
        <hr />
        <div onClick={cliced} className="box box1">
          <Link className="link" to="/resume">
            <img className="img" src="/images/resume.png" alt="rasm3" />
            <h1>Resume</h1>
          </Link>
        </div>
        <hr />
        <div onClick={cliced} className="box box1">
          <Link className="link" to="/contact">
            <img className="img" src="/images/placeholder.png" alt="rasm4" />
            <h1>Contact</h1>
          </Link>
        </div>
        <hr />
        <div className="box box2">
          {isdark ? (
            <img
              onClick={light}
              className="dark"
              src="/images/light.png"
              alt="rasm4"
            />
          ) : (
            <img
              onClick={dark}
              className="dark"
              src="/images/dark.png"
              alt="rasm4"
            />
          )}

          <h1 className="darkText">Mode</h1>
        </div>
        <hr />
      </div>
    </div>
  );
}
