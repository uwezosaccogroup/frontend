import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { Container, Form, Button } from "semantic-ui-react";
import NavBar from './NavBar';

import Profile from "./Profile"
import Savings from "./Savings"
import WithdrawForm from "./Withdraw";

const DepositForm = () => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch("https://localhost:9292/users/balance");
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
    <h1>Deposit</h1>
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
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/savings" element={<Savings />} />
      </Routes>
    </>
  );
}

export default Deposit;
