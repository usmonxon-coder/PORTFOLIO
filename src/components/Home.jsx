import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home(props) {
  return (
    <div className="home">
      <div className="container">
        <div className="boxes">
          <div className="box1">
            <h3 style={{ fontSize: "30px" }}>Hello, I'm</h3>
            <h1>USMONXON SIROCHXONOV</h1>
            <h2>Frontend Developer</h2>
            {/* <h2>Student</h2> */}
            <Link className="link1" to="/resume">
              SEE MY WORK
            </Link>
            <div className="message">
              <a
                target={"_blank"}
                href="https://www.instagram.com/sirochxonov_usmonxon_official"
              >
                <img src="/images/instagram.png" alt="rasm1" />
              </a>
              <a target={"_blank"} href="https://t.me/Maykl_skofild_2001">
                <img src="/images/telegram.png" alt="rasm2" />
              </a>
              <a target={"_blank"} href="https://usmonxonsirchxonov@gmail.com">
                <img src="/images/search.png" alt="rasm3" />
              </a>
              <a target={"_blank"} href="https://github.com/usmonxon-coder">
                <img src="/images/github.png" alt="rasm4" />
              </a>
            </div>
          </div>
          <div className="box2">
            <div className="black">
              <div className="quti">
                <div className="background">
                  <img className="img2" src="/images/usmonxon.jpg" alt="rasm" />
                </div>
                <h3>Usmonxon Sirochxonov</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident inventore doloremque fuga tempora dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
