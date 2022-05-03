import React from "react";
import "../styles/Home.css";

export default function Home(props) {
  return (
    <div className="home">
      <div className="container">
        <div className="name">
          <h1>HI, I'M USMONXON</h1>
        </div>
        <div className="boxes">
          <div className="box box1">
            <a target={"_blank"} href="https://www.facebook.com">
              <img src="/images/resume.png" alt="rasm1" />
            </a>
          </div>
          <div className="box box2">
            <a target={"_blank"} href="https://www.facebook.com">
              <img src="/images/resume.png" alt="rasm2" />
            </a>
          </div>
          <div className="box box3">
            <a target={"_blank"} href="https://www.facebook.com">
              <img src="/images/resume.png" alt="rasm3" />
            </a>
          </div>
          <div className="box box4">
            <a target={"_blank"} href="https://www.facebook.com">
              <img src="/images/resume.png" alt="rasm4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
