import React from "react";
import { Grid, Header, Container } from "semantic-ui-react";

function About() {
  return (
    <div id="section1">
      <Container className="about-container">
        <Header as="h1">About Us</Header>
        <Grid columns={2}>
          <Grid.Column>
            <p>
              Welcome to our SACCO! We are proud to offer our members a variety
              of financial services, including deposit, withdrawal, and savings
              accounts. Our mission is to help our members achieve their
              financial goals by providing secure and convenient financial
              services.
            </p>
            <p>
              At our SACCO, we understand the importance of building a strong
              financial foundation. That's why we offer a range of savings
              accounts designed to help our members save for the future. Whether
              you're saving for a down payment on a new home, planning for your
              children's education, or building an emergency fund, we have a
              savings account that can help you achieve your goals.
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>
              In addition to our savings accounts, we offer deposit and
              withdrawal services to make managing your finances simple and
              convenient. With our deposit services, you can easily deposit
              funds into your account at any time. And with our withdrawal
              services, you can access your funds whenever you need them,
              whether you're withdrawing cash at one of our branches or using
              your ATM card to withdraw funds from an ATM. At our SACCO, we're
              committed to providing our members with the financial tools they
              need to succeed.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
