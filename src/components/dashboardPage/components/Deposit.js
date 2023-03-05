import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { Container, Card, Form, Button } from "semantic-ui-react";
import NavBar from './NavBar';

import ProfileForm from "./Profile"
import SavingsForm from "./Savings"
import WithdrawForm from "./Withdraw";

const DepositForm = () => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch(
          "https://uwezosacco.up.railway.app/users/balance"
        );
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchBalance();
  }, []);

  const handleDeposit = () => {
    // add logic to deposit the amount entered by the user
  };
  return (
  
    <Container id="deposit-container">
    <Card centered>
      <Card.Content>
        <Card.Header>Deposit</Card.Header>
        <Card.Description>
          <h3>Your current balance is: {balance}</h3>
          <Form>
            <Form.Field>
              <label>Amount to deposit</label>
              <input
                type="number"
                placeholder="Enter amount to deposit"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
            </Form.Field>
            <Button primary onClick={handleDeposit}>Deposit</Button>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  </Container>
  
  );
};

function Deposit() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={< DepositForm/>} />
        <Route exact path="/withdraw" element={<WithdrawForm />} />
        <Route exact path="/profile" element={<ProfileForm />} />
        <Route exact path="/savings" element={<SavingsForm />} />
      </Routes>
    </>
  );
}

export default Deposit;
