import React from "react";
import { Container } from "semantic-ui-react";
import "../../App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Faqs from "./components/Faqs";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";

function Landing() {
  return (
    <div className="my-app">
      <Header />

      <Home />

      <Container text style={{ marginTop: "17em" }}>
        <About />
      </Container>

      <Container text style={{ marginTop: "17em" }}>
        <Services />
      </Container>

      <Container text style={{ marginTop: "17em" }}>
        <Faqs />
      </Container>

      <Container text style={{ marginTop: "17em" }}>
        <SignUp />
      </Container>

      <Container text style={{ marginTop: "17em" }}>
        <Footer />
      </Container>
    </div>
  );
}

export default Landing;
