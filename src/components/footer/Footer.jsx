import React from "react";
import "./Footer.scss";
import small1 from "../../assets/small1.png";
import small2 from "../../assets/small2.png";
import small3 from "../../assets/small3.png";
import small4 from "../../assets/small4.png";
import small5 from "../../assets/small5.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container__image-gallery">
        <div className="footer__container__image-section">
          <img src={small1} alt="" />
          <img src={small2} alt="" />
          <img src={small3} alt="" />
          <img src={small4} alt="" />
          <img src={small5} alt="" />
        </div>
        <div className="footer__container__image-sub-section">
          <div className="footer__container__image-sub-section__content">
            <h2 style={{ fontWeight: "bold" }}>Follow My instagram</h2>
            <h5>@logoipsom</h5>
          </div>
        </div>
      </div>
      {/* shapes */}
      <div className="footer__container-wrapper-shape">
        <div className="footer__container-box"></div>
        <div className="footer__container-circle"></div>
        <div className="footer__container-circle"></div>
      </div>
      {/* footer nav section */}.
      <div className="footer__container-list">
        <ul className="footer__container-list__wrapper">
          <li className="footer__container-list__wrapper-content">ABOUTME</li>
          <li className="footer__container-list__wrapper-content">
            ADVERTISING
          </li>
          <li className="footer__container-list__wrapper-content">CONTACTME</li>
          <li className="footer__container-list__wrapper-content">
            TERMS OF USE
          </li>
          <li className="footer__container-list__wrapper-content">SUBSCRIBE</li>
        </ul>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="footer__container__social-media">
        <ul className="footer__container__social-media__wrapper">
          <li className="footer__container__social-media__wrapper-content">
            <FacebookIcon />
          </li>
          <li className="footer__container__social-media__wrapper-content">
            <InstagramIcon />
          </li>
          <li className="footer__container__social-media__wrapper-content">
            <TwitterIcon />
          </li>
          <li className="footer__container__social-media__wrapper-content">
            <LinkedInIcon />
          </li>
        </ul>
      </div>
      {/* owned by */}
      <div className="footer__container__copy-right">
        <div className="footer__container__copy-right">
          <h1>@copyright logoipsom All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
