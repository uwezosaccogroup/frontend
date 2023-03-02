import React, { useState } from "react";
import { Container, Form, Grid, Segment, Dropdown } from "semantic-ui-react";
import "../App.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    occupation: "",
    location: "",
    accountType: "",
    nextOfKin: "",
    nextOfKinPhoneNumber: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const postData = async (formData, endpoint) => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error posting data: ", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // insert form data into database here
    const endpoint = "https://localhost:9292/users/";
    const formData = postData(formData, endpoint);
    console.log(formData);
  };
  
  const handleDropdownChange = (e, { value }) => {
    setFormData({ ...formData, accountType: value });
  };

  const accountOptions = [
    { key: "current", text: "Current", value: "current" },
    { key: "savings", text: "Savings", value: "savings" },
  ];

  return (
    <Container id="section4" className="signup">
      <h1 className="signup-title">Sign Up</h1>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Grid columns={2}>
            <Grid.Column>
              <Form.Field>
                <label>Full Name</label>
                <input
                  name="fullName"
                  onChange={handleChange}
                  value={formData.fullName}
                  placeholder="Full Name"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Email"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <input
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
                  required
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Occupation</label>
                <input
                  name="occupation"
                  onChange={handleChange}
                  value={formData.occupation}
                  placeholder="Occupation"
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Location</label>
                <input
                  name="location"
                  onChange={handleChange}
                  value={formData.location}
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
                  value={formData.accountType}
                />
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Form.Field>
            <label>Next of Kin</label>
            <input
              name="nextOfKin"
              onChange={handleChange}
              value={formData.nextOfKin}
              placeholder="Next of Kin"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Next of Kin Phone Number</label>
            <input
              name="nextOfKinPhoneNumber"
              onChange={handleChange}
              value={formData.nextOfKinPhoneNumber}
              placeholder="Next of Kin Phone Number"
              required
            />
          </Form.Field>
          <Form.Button primary>Submit</Form.Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default Signup;
