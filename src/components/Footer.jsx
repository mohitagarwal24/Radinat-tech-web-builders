import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #1d1d1d;
  width: 100%;
  flex-wrap: wrap;
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;
  gap: 2rem;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContent>
        <div>CATEGORIES</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontSize: "12px",
          }}
        >
          <span>Web Builder</span>
          <span>Hosting</span>
          <span>Data Center</span>
          <span>Robotic-Automation</span>
        </div>
      </FooterContent>
      <FooterContent>
        <div>CONTACT</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontSize: "12px",
          }}
        >
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Categories</span>
          <span>About</span>
        </div>
      </FooterContent>
      <FooterContent>
        <div>
          United States{" "}
          <img
            style={{ width: "1rem" }}
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            alt=""
          />
        </div>
      </FooterContent>
    </FooterDiv>
  );
};

export default Footer;
