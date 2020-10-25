import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home, Gnb, About, Develop, Design, Contact } from "../pages/Index";
// import mainImg from "./main.jpg";

function App() {
  return (
    <BrowserRouter>
      <Gnb />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/develop" component={Develop} />
      <Route exact path="/design" component={Design} />
      <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
