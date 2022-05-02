import React from "react";
import Sidebar from "./Sidebar";

export default function NotFount(props) {
  return (
    <div className="notFount">
      <Sidebar />
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          fontFamily: "sans-serif",
        }}
        className="container"
      >
        <h1>404</h1>
        <h1>Page Not Fount</h1>
      </div>
    </div>
  );
}
