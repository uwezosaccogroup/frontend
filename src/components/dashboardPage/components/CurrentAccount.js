import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'semantic-ui-react';

function CurrentAccount() {
  const [currentData, setCurrentData] = useState({});
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  useEffect(() => {
    axios
      .get('https://uwezosacco.up.railway.app/currentaccounts')
      .then((response) => {
        const lastCurrent = response.data[response.data.length - 1];
        setCurrentData(lastCurrent);
      })
      .catch((error) => {
        console.error('Error fetching current data: ', error);
      });
  }, []);

  const handleDeposit = () => {
    const newBalance = parseInt(currentData.balance) + parseInt(depositAmount);
    setCurrentData({ ...currentData, balance: newBalance });
    setDepositAmount(0);
  };

  const handleWithdraw = () => {
    const newBalance = parseInt(currentData.balance) - parseInt(withdrawAmount);
    setCurrentData({ ...currentData, balance: newBalance });
    setWithdrawAmount(0);
  };

  return (
    <div className='current-account-container'>
      <Card>
        <Card.Content>
          <Card.Description>
            <p style={{ color: 'black' }}>Account Number: {currentData.account_number}</p>
            <p style={{ color: 'black' }}>Date of Transaction: {currentData.date_of_transaction}</p>
            <p style={{ color: 'black' }}>Balance: {currentData.balance}</p>
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

export default CurrentAccount;
