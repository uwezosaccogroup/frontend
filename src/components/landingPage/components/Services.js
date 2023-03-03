import React from "react";
import { Card, Container, Grid, Image } from "semantic-ui-react";

const Services = () => {
  return (
    <div id="section2">
      <Container textAlign="center" className="services-container">
        <h1>Our Services</h1>
        <Grid columns={3} stackable>
          <Grid.Column>
            <Card className="bg-dark" >
              <Image src="https://www.pngmart.com/files/7/Savings-PNG-File.png" />
              <Card.Content>
                <Card.Header style={{ color: 'white' }}>Savings</Card.Header>
                <Card.Description style={{ color: 'white' }}>
                  Building savings is an important step towards achieving
                  financial stability, and we provide our members with the
                  resources they need to save and invest wisely.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card className="bg-dark" >
              <Image src="https://www.pngall.com/wp-content/uploads/1/Deposit-Transparent.png" />
              <Card.Content>
                <Card.Header style={{ color: 'white' }}>Deposit</Card.Header>
                <Card.Description style={{ color: 'white' }}>
                  We provide our members with a safe and secure place to deposit
                  their funds, knowing that their money is protected by strong
                  financial controls and regulations.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card className="bg-dark" >
              <Image src="https://www.pngmart.com/files/7/Withdraw-PNG-Photos.png" />
              <Card.Content>
                <Card.Header style={{ color: 'white' }}>Withdraw</Card.Header>
                <Card.Description style={{ color: 'white' }}>
                  We offer withdrawal services  which involves establishing a
                  system  through which  members  can withdraw their funds or
                  savings from their accounts.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
