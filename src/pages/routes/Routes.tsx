import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Home, About, Develop, Design } from "../Index";
export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route exact path="/yurim-world" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/develop" component={Develop} />
      <Route exact path="/design" component={Design} />
    </RoutesWrapper>
  );
};
const RoutesWrapper = styled.div``;
