import React, { useState } from "react";
import {
  Container,
  Grid,
  Icon,
  Input,
  Form,
  TextArea,
  Button,
} from "semantic-ui-react";
import "../../../App.css"; // import your custom CSS file

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, email, feedback});
  };

  return (
    <Container fluid className="footer-container">
      <Grid columns="equal" centered>
        <Grid.Row className="footer-row">
          <Grid.Column textAlign="center">
            <Icon name="phone" /> (123) 456-7890
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Icon name="mail" /> uwezosacco@bank.com
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Icon name="map marker alternate" /> 123 Main St, Nairobi KENYA
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="footer-row">
          <Grid.Column textAlign="center">
            <h4>Send us your feedback</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <Input
                  placeholder="Name"
                  required
                  className="footer-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  placeholder="Email"
                  required
                  className="footer-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  placeholder="Your feedback"
                  required
                  className="my-input"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </Form.Field>
              <Button type="submit" color="green">
                Send
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Footer;
