import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Content from "./components/Content";
import Footer from "./components/Footer";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
`


function App() {
  return (
    <Container>
      <Navbar/>
      <Content/>
      <Footer/>
    </Container>
  );
}

export default App;
