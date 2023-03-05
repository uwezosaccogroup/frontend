import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import { Container, Card, Form, Button } from "semantic-ui-react";
import Profile from "./Profile"
import Deposit from "./Deposit"
import Savings from "./Savings"

function WithdrawForm() {
  const [balance, setBalance] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  
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
  
  const handleWithdraw = () => {
    const newBalance = balance - withdrawAmount;
    if (newBalance < 0) {
      alert("Insufficient funds");
      return;
    }
    setBalance(newBalance);
    setWithdrawAmount(0);
    // add logic to update the balance and reset the input field
  };

  return (
    <Container id="withdraw-container">
    <Card centered>
      <Card.Content>
        <Card.Header>Withdraw</Card.Header>
        <Card.Description>
          <h3>Your current balance is: {balance}</h3>
          <Form>
            <Form.Field>
              <label>Amount to withdraw</label>
              <input
                type="number"
                placeholder="Enter amount to withdraw"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
            </Form.Field>
            <Button primary onClick={handleWithdraw}>Withdraw</Button>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  </Container>
  );
}

function Withdraw() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={< WithdrawForm/>} />
        <Route exact path="/deposit" element={<Deposit />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/savings" element={<Savings />} />
      </Routes>
    </>
  );
}

export default Withdraw;
