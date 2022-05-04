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
        <h2>My Skills</h2>
        <div className="cards">
          <div className="card1">
            <h3> My skills and experienses</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              doloremque sunt eum est. Fuga recusandae, explicabo harum ipsam
              distinctio mollitia vero voluptatum. Nesciunt, accusamus nisi
              deserunt veniam quasi odit quidem!
            </p>
          </div>
          <div className="card2">
            <div className="present">
              <h5>HTML5</h5>
              <h4>90%</h4>
            </div>
            <div style={{ backgroundColor: "red" }} className="box box1">
              <span style={{width:"10%"}}></span>
            </div>
            <div className="present">
              <h5>CSS3</h5>
              <h4>85%</h4>
            </div>
            <div style={{ backgroundColor: "blue" }} className="box box2">
              <span style={{width:"13%"}}></span>
            </div>
            <div className="present">
              <h5>BOOTSTRAP5</h5>
              <h4>95%</h4>
            </div>
            <div style={{ backgroundColor: "green" }} className="box box3">
              <span style={{width:"5%"}}></span>
            </div>
            <div className="present">
              <h5>JAVASCRIPT Es6</h5>
              <h4>75%</h4>
            </div>
            <div style={{ backgroundColor: "yellow" }} className="box box4">
              <span style={{width:"25%"}}></span>
            </div>
            <div className="present">
              <h5>REACT Js</h5>
              <h4>80%</h4>
            </div>
            <div style={{ backgroundColor: "blueviolet" }} className="box box5">
              <span style={{width:"20%"}}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
