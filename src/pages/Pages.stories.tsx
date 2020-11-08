import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Home,
  Gnb,
  About,
  Develop,
  Design,
  Contact,
} from "./Index";

export default {
  title: "pages/all",
  component: Gnb,
  argTypes: {},
};

export const DefaultGnb = () => {
  return (
    <BrowserRouter>
      <Gnb />
    </BrowserRouter>
  );
};
export const HomePage = () => <Home />;
export const AboutPage = () => <About />;
export const DevelopPage = () => <Develop />;
export const DesignPage = () => <Design />;
export const ContactPage = () => <Contact />;
