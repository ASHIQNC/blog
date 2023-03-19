import React, { useState } from "react";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = ({ classname = "" }) => {
  const navigate = useNavigate();
  return (
    <div className={`${classname} navbar__container`}>
      <div className="navbar__container-wrapper">
        <div className="navbar__container-wrapper-shape">
          <div className="navbar__container-box"></div>
          <div className="navbar__container-circle"></div>
          <div className="navbar__container-circle"></div>
        </div>

        <div className="navbar__container-list">
          <ul className="navbar__container-list__wrapper">
            <li
              onClick={() => {
                navigate("/");
              }}
              className="navbar__container-list__wrapper-content">
              HOME
            </li>
            <li
              onClick={() => {
                navigate("/blog");
              }}
              className="navbar__container-list__wrapper-content">
              BLOG
            </li>
            <li
              onClick={() => {
                navigate("/detail");
              }}
              className="navbar__container-list__wrapper-content">
              DETAILS
            </li>
          </ul>
        </div>
      </div>
      <h1 className="navbar__container__header">logoipsum</h1>
    </div>
  );
};

export default Navbar;
