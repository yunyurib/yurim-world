import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Home, About, Develop, Design } from "../Index";
export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route exact path="/yurim-world/" component={Home} />
      <Route path="/yurim-world/about/" component={About} />
      <Route path="/yurim-world/develop/" component={Develop} />
      <Route path="/yurim-world/design/" component={Design} />
    </RoutesWrapper>
  );
};
const RoutesWrapper = styled.div``;
