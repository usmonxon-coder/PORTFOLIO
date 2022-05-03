import React from "react";
import "../styles/Resume.css";

export default function Resume(props) {
  return (
    <div className="resume">
      <div className="container">
        <h1>Resume</h1>
        <div className="boxes">
          <div className="box1">
            <div className="profile">
              <img src="images/usmonxon.jpg" alt="rasm" />
            </div>
            <div className="text">
              <h3>Usmonxon Sirochxonov</h3>
              <h4>
                <b>Frontend developer</b>
              </h4>
            </div>
          </div>
          <h2>Education</h2>
          <div className="box box2">
            <h4>
              <a href="">33-umumiy orta talim maktabi</a>
            </h4>
            <p>2009-2020</p>
          </div>
          <hr />
          <div className="box box3">
            <h4>
              <a href="https://www.nuu.uz">O'zbekiston milliy universiteti</a>
            </h4>
            <p>2020-2022...</p>
          </div>
          <hr />
          <div className="box box4">
            <h4>
              <a href="https://t.me/zakoacademy">Zako IT Academy</a>
            </h4>
            <p>2021-2022</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
