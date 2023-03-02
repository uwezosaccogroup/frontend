import React from 'react';
import { Container, Grid, Icon, Input, Form, TextArea, Button } from 'semantic-ui-react';

const Footer = () => {
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
            <Form>
              <Form.Field>
                <Input placeholder="Name" required />
              </Form.Field>
              <Form.Field>
                <Input placeholder="Email" required />
              </Form.Field>
              <Form.Field>
                <TextArea placeholder="Your feedback" required />
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
