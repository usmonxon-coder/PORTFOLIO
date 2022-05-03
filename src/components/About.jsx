import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

export default function About(props) {
  return (
    <div className="about">
      <div className="container">
        <div className="boxes">
          <div className="left">
            <img src="/images/usmonxon.jpg" alt="" />
          </div>
          <div className="right">
            <h1>ABOUT ME</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aut. Sint, rem sequi sapiente facere repellat possimus
              quos aliquid voluptates soluta ut eligendi!
            </h3>
            <hr />
            <div className="box box1">
              <div className="img">
                <img src="/images/user.png" alt="rasm" />
                <p>Birth day</p>
              </div>
              <p>03.11.2001</p>
            </div>
            <hr />
            <div className="box box2">
              <div className="img">
                <img src="/images/user.png" alt="rasm" />
                <p>Hobbies</p>
              </div>
              <p>Books reading</p>
            </div>
            <hr />
            <div className="box box3">
              <div className="img">
                <img src="/images/user.png" alt="rasm" />
                <p>Web Site</p>
              </div>
              <p>www.usmonxon.com</p>
            </div>
            <hr />
            <div className=" box4">
              <p>
                If you are interested in my work, if you want to offer a
                Partnership or a Job, write it down without hesitation.
              </p>
              <Link className="btn" to="/contact">MESSAGE ME</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
