import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Gnb, Routes} from "../pages/Index";
import "./App.css";

// import mainImg from "./main.jpg";

function App() {
  return (
    <Router>
      <Gnb />
      <Routes />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
