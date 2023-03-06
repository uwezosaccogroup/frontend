import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'semantic-ui-react';

function SavingsAccount() {
  const [savingsData, setSavingsData] = useState({});
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  useEffect(() => {
    axios
      .get('https://uwezosacco.up.railway.app/savingsaccounts')
      .then((response) => {
        const lastSavings = response.data[response.data.length - 1];
        setSavingsData(lastSavings);
      })
      .catch((error) => {
        console.error('Error fetching savings data: ', error);
      });
  }, []);

  const handleDeposit = () => {
    const newBalance = parseInt(savingsData.balance) + parseInt(depositAmount);
    setSavingsData({ ...savingsData, balance: newBalance });
    setDepositAmount(0);
    window.alert(`Deposit of ${depositAmount} successful!`);
  };
  

  const handleWithdraw = () => {
    const newBalance = parseInt(savingsData.balance) - parseInt(withdrawAmount);
    if (newBalance < 0) {
      alert('Insufficient funds enter a lower amount');
    } else {
      setSavingsData({ ...savingsData, balance: newBalance });
      setWithdrawAmount(0);
      alert('Withdrawal successful');
    }
};


  return (
    <div className='savings-account-container'>
      <Card>
        <Card.Content>
          <Card.Description>
            <p style={{ color: 'black' }}>Account Number: {savingsData.account_number}</p>
            <p style={{ color: 'black' }}>Date of Transaction: {savingsData.date_of_transaction}</p>
            <p style={{ color: 'black' }}>Balance: {savingsData.balance}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Form>
            <Form.Field>
              <label>Deposit Amount</label>
              <input
                type='number'
                placeholder='Enter amount'
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
              />
            </Form.Field>
            <Form.Field>
              <label>Withdraw Amount</label>
              <input
                type='number'
                placeholder='Enter amount'
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(Number(e.target.value))}
              />
            </Form.Field>
            <Button type='button' onClick={handleDeposit}>Deposit</Button>
            <Button type='button' onClick={handleWithdraw}>Withdraw</Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
  
}

export default SavingsAccount;
