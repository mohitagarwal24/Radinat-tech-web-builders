import React from "react";
import styled from "styled-components";
import { Rating } from "@mui/material";

const CardDiv = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 4px;
  height: auto;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NumberDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid grey;
  border-radius: 200rem;
  
`;

const CardImage = styled.span`
  display: flex;
`;
const CardInfo = styled.span`
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;
const CardRatings = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({ serialNo, Desc, Highlights, rate, level }) => {
  return (
    <CardDiv>
      <CardImage>
        <NumberDiv>{serialNo}</NumberDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            marginBottom: "3rem",
            gap: "0.8rem",
          }}
        >
          <img
            style={{ width: "9rem" }}
            src="https://www.ryrob.com/wp-content/uploads/2020/09/Best-Website-Builders-to-Choose-This-Year-for-Building-a-Website-with-No-Code-icon.svg"
            alt=""
          />
          <div>Builder 1</div>
        </div>
      </CardImage>
      <CardInfo>
        <div>{Desc}</div>
        <div
          style={{ marginTop: "4px", marginBottom: "4px", fontWeight: "bold" }}
        >
          Main Highlights
        </div>
        <div style={{ marginTop: "2px", marginBottom: "4px" }}>
          {Highlights}
        </div>
        <div
          style={{
            marginTop: "12px",

            color: "#0096FF",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Show more{" "}
          <img
            style={{ width: "1rem" }}
            src="https://cdn-icons-png.freepik.com/512/747/747894.png"
            alt=""
          />
        </div>
      </CardInfo>

      <CardRatings>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F0FFFF",
            borderRadius: "8px",
            width: "6rem",
            height: "7rem",
            color: "#0047AB",
          }}
        >
          <span style={{ fontSize: "2rem" }}>{rate}</span>
          <span style={{ fontSize: "12px" }}>{level}</span>
          <Rating
            size={"small"}
            name="half-rating-read"
            defaultValue={rate}
            precision={0.1}
            readOnly
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
            color: "white",
            backgroundColor: "#0096FF",
            height: "2rem",
            width: "9rem",
            marginBottom: "2rem",
          }}
        >
          View
        </div>
      </CardRatings>
    </CardDiv>
  );
};

export default Card;
