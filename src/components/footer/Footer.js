import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infotext">
          Enjoy Free Movies and Tv show.Stream unlimited movies and TV shows on
          your phone, tablet, laptop, and TV.Send children on adventures with
          their favourite characters in a space made just for them—free with
          your membership.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
