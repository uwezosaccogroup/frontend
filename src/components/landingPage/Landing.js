import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "../../App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Faqs from "./components/Faqs";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function Landing() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="my-app">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />

          <Container id="about" text style={{ marginTop: "17em" }}>
            <About />
          </Container>

          <Container id="services" text style={{ marginTop: "17em" }}>
            <Services />
          </Container>

          <Container id="faqs" text style={{ marginTop: "17em" }}>
            <Faqs />
          </Container>

          <Container id="signup" text style={{ marginTop: "17em" }}>
            <SignUp />
          </Container>

          <Container text style={{ marginTop: "17em" }}>
            <Footer />
          </Container>

          <style>
            {`
              @media only screen and (max-width: 768px) {
                /* Adjust styles for smaller screens */
                .my-app {
                  margin-top: 0;
                }
                #section1,
                #section2,
                #section3,
                #section4 {
                  margin-top: 5em;
                }
              }
            `}
          </style>
        </>
      )}
    </div>
  );
}

export default Landing;
