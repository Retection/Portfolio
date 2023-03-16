import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>siyingace@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/sy_retection/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/si-ying-wong-521076209/"><Linkin color="white" size={"3rem"} /></a>
          <a  href="https://github.com/Retection"><Github color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
