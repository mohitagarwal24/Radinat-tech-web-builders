import React from "react";
import styled from "styled-components";

const Navbardiv = styled.div`
  display: flex;
  background-color: #1d1d1d;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;

  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
`;
const SearchBox = styled.div`
  display: flex;
  border-radius: 5px;
  height: 2rem;
  width: 16rem;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Navbardiv>
      <SearchBox>
        <img
          style={{ width: "2rem", height: "2rem" }}
          src="https://www.freepnglogos.com/uploads/search-png/search-file-ios-svg-wikimedia-commons-18.png"
          alt="search"
        />
        <inputDiv>
          <input
            style={{ width: "13rem", border: "none", height: "1.5rem" }}
            type="text"
          />
        </inputDiv>
      </SearchBox>

      <span style={{ color: "white" }}>Categories</span>
      <span style={{ color: "white" }}>Website Builders</span>
      <span style={{ color: "white" }}>Today's deals</span>
    </Navbardiv>
  );
};

export default Navbar;
