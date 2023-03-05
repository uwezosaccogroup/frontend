import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Grid, Segment, Dropdown ,Button} from "semantic-ui-react";

// import Dashboard from "../../dashboardPage/Dashboard";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    location: "",
    account_type: "",
    next_of_kin: "",
    next_of_kin_phone: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDropdownChange = (e, { value }) => {
    setFormData({ ...formData, account_type: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://uwezosacco.up.railway.app/users/",
        formData
      );
      console.log(response.data);
      // Redirect to dashboard page upon successful signup
      // You can define your own function for redirection
      // Here, we are using the `Dashboard` component
      window.location.href = "../../dashboard/profile/";
    } catch (error) {
      console.error(error);
    }
  };

  const accountOptions = [
    { key: "current", text: "Current", value: "current" },
    { key: "savings", text: "Savings", value: "savings" },
  ];

  const {
    name,
    email,
    phone,
    occupation,
    location,
    account_type,
    next_of_kin,
    next_of_kin_phone,
  } = formData;

  return (
    <Container id="section4">
      <h1 className="signup-title">Sign Up</h1>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Grid columns={1} stackable>
            <Grid.Column>
              <Form.Field>
                <label>Full Name</label>
                <input
                  name="name"
                  onChange={handleChange}
                  value={name}
                  placeholder="Full Name"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="Email"
                  type="email"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={phone}
                  placeholder="Phone Number"
                  type="tel"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Occupation</label>
                <input
                  name="occupation"
                  onChange={handleChange}
                  value={occupation}
                  placeholder="Occupation"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Location</label>
                <input
                  name="location"
                  onChange={handleChange}
                  value={location}
                  placeholder="Location"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Account Type</label>
                <Dropdown
                  placeholder="Select account type"
                  fluid
                  selection
                  options={accountOptions}
                  onChange={handleDropdownChange}
                  value={account_type}
                />
              </Form.Field>
              <Form.Field>
                <label>Next of Kin</label>
                <input
                  name="next_of_kin"
                  onChange={handleChange}
                  value={next_of_kin}
                  placeholder="Next of kin"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Next of Kin Phone Number</label>
                <input
                  name="next_of_kin_phone"
                  onChange={handleChange}
                  value={next_of_kin_phone}
                  placeholder="Next of Kin Phone Number"
                  type="tel"
                  required
                />
              </Form.Field>
              <Button type="submit" color="blue">
                Submit
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    </Container>
  );
};

export default Signup;
