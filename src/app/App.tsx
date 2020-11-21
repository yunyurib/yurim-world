import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Gnb, Routes } from "../pages/Index";
import "./App.css";
import "../assets/script/mouseMove";

// import mainImg from "./main.jpg";

function App() {
  return (
    <Router>
      <div className="cursor"><span className="cursor-hover"></span></div>
      <div className="cursor-follower"><span className="cursor-hover02"></span></div>
      <Gnb />
      <Routes />
    </Router>
  );
}

export default App;
