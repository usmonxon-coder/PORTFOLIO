import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NotFount from "./components/NotFount";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        {/* <div className="container"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFount />} />
          </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}
