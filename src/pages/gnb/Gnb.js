import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Gnb = () => {
  return (
    <GnbWrapper>
      <Link to="/about">About</Link>
      <Link to="/develop">Develop</Link>
      <Link to="/design">Design</Link>
      <Link to="/contact">Contact</Link>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  background: orange;
  > a {
    float: left;
    width: 25%;
  }
`;
