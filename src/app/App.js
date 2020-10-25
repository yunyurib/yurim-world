import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Gnb, Routes } from "../pages/Index";
import "./App.css";

// import mainImg from "./main.jpg";

function App() {
  return (
    <BrowserRouter>
      <Gnb />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
