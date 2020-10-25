import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Home, Gnb, About, Develop, Design, Contact } from "../pages/Index";

function App() {
  return (
    <Router>
      <Gnb />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/develop" component={Develop} />
      <Route exact path="/design" component={Design} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
