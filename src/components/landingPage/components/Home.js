import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

const Home = () => {
  return (
    <Container fluid className="home-section">
      <Header />
      <div className="overlay">
      
        <h1>WELCOME TO UWEZO SACCO</h1>
        <h2>Your trusted E-banking application...</h2>
      </div>
    </Container>
  );
};

export default Home;
