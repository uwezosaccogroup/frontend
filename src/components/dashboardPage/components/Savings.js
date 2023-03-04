import React, { useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import { Input, Form, Card, Button, Container } from "semantic-ui-react";
import ProfileForm from "./Profile"
import DepositForm from "./Deposit"
import WithdrawForm from "./Withdraw";


const SavingsForm = ({ onTransfer }) => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [savingsBalance, setSavingsBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/balances')
      .then(response => response.json())
      .then(data => {
        setCurrentBalance(data.currentBalance);
        setSavingsBalance(data.savingsBalance);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const transferAmount = parseFloat(amount);

    if (transferAmount > currentBalance) {
      setError('Insufficient funds');
      return;
    }

    onTransfer(transferAmount);
    setAmount('');
    setError('');
  };

  return (
    <Container id="savings-container">
    <Card centered>
      <Card.Content>
        <Card.Header>Transfer to Savings</Card.Header>
        <Card.Description>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Current Balance: ${currentBalance}</label>
            </Form.Field>
            <Form.Field>
              <label>Savings Balance: ${savingsBalance}</label>
            </Form.Field>
            <Form.Field>
              <label>Transfer Amount</label>
              <Input
                type="number"
                label="$"
                labelPosition="left"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                error={error}
              />
            </Form.Field>
            <Button primary>Transfer to Savings</Button>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  </Container>
  );
};




function Savings() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<SavingsForm />} />
        <Route exact path="/deposit" element={<DepositForm />} />
        <Route exact path="/profile" element={<ProfileForm />} />
        <Route exact path="/withdraw" element={<WithdrawForm />} />
      </Routes>
    </>
  );
}

export default Savings;