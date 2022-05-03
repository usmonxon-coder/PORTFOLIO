import React from "react";
import "../styles/Contact.css";

export default function Contact(props) {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact</h1>
        <div className="boxes">
          <div className="box box1">
            <img src="/images/placeholder.png" alt="rasm" />
            <h2>Adress</h2>
          
              <a
                href="https://maps.app.goo.gl/L1JtAvYJTc9cgffD7"
                target={"_blank"}
              >
                Toshkent, Uzbekistan
              </a>
            
          </div>
          <div className="box box1">
            <img src="/images/phone.png" alt="rasm" />
            <h2>Phone</h2>
          
              <a href="">+998944157775</a>
            
          </div>
          <div className="box box1">
            <img src="/images/mail.png" alt="rasm" />
            <h2>Email adress</h2>
          
              <a href="https://www.usmonxonsirochxonov@gmail.com" target={"_blank"}>
                usmonxon@gmail.com
              </a>
            
          </div>
          <div className="box box1">
            <img src="/images/web.png" alt="rasm" />
            <h2>Website</h2>
          
              <a
                href="https://ecommerce-for-practice.herokuapp.com/"
                target={"_blank"}
              >
                eCommerse
              </a>
            
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <h2>Send Message</h2>
            <form>
              <input type="text" placeholder="Name..." />
              <input type="email" placeholder="Email..." />
              <textarea name="" id="" cols="30" rows="7">
                Messages...
              </textarea>
              <button type="button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
