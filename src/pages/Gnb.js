import React from "react";
import { Link } from "react-router-dom";

export const Gnb = () => {
  return (
    <ul>
      <li>
        <Link to="/">메인</Link>
      </li>
      <li>
        <Link to="/sub">서브</Link>
      </li>
    </ul>
  );
};
