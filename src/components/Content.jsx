import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 50rem;
  }
`;

const StatusDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  margin-top: 12px;
  gap: 2rem;
  font-weight: 500;
`;

const PathDiv = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 12px;
  margin-bottom: 6px;
  gap: 2rem;
`;

const SignInDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const content = () => {
  return (
    <ContentDiv>
      <h1>Best Website Builders in US</h1>
      <div
        style={{ borderTop: "0.5px solid grey ", marginBottom: "4px" }}
      ></div>
      <StatusDiv>
        <span
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <img
            style={{ width: "1rem" }}
            src="https://cdn-icons-png.flaticon.com/128/1442/1442912.png"
            alt=""
          />
          <span>Last Updated - February 21, 2023</span>
          <span style={{ marginLeft: "12px" }}> ⓘ Advertising Disclosue </span>
        </span>
        <span
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          Top Relevant{" "}
          <img
            style={{ width: "1rem" }}
            src="https://static.thenounproject.com/png/4172815-200.png"
            alt=""
          />
        </span>
      </StatusDiv>
      <div style={{ borderTop: "0.5px solid grey ", marginTop: "4px" }}></div>

      <MenuItems>
        <span>Tools</span>
        <span>AWS Builder</span>
        <span>Start Build</span>
        <span>Build Supplies</span>
        <span>Tooling</span>
        <span>BlueHosting</span>
      </MenuItems>

      <PathDiv>
        Home {`>`} Hosting for all {`>`} Hosting {`>`} Hosting6 {`>`} Hosting5
      </PathDiv>

      <Card
        serialNo={1}
        Desc={
          "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        }
        Highlights={
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        }
        rate={9.8}
        level={"Exceptional"}
      />

      <Card
        serialNo={2}
        Desc={
          "SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
        }
        Highlights={
          "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
        }
        rate={9.5}
        level={"Excellent"}
      />

      <Card
        serialNo={3}
        Desc={
          "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        }
        Highlights={
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library.of widgets and apps, and detailed step-by-step guides."
        }
        rate={9.3}
        level={"Exceptional"}
      />

      <Card
        serialNo={4}
        Desc={
          "CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides"
        }
        Highlights={"Building Responsive cool Docs"}
        rate={9.1}
        level={"Very Good"}
      />

      <SignInDiv>
        <div style={{ color: "darkgrey", fontSize: "2rem" }}>
          Sign Up and Get Exclusive Special Deals
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "8rem",
            backgroundColor: "#0096FF",
            borderRadius: "1rem",
            color: "white",
          }}
        >
          SignIn
        </div>
      </SignInDiv>
    </ContentDiv>
  );
};

export default content;
