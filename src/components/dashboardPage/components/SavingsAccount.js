import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

function SavingsAccount() {
  const [savingsData, setSavingsData] = useState({});

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

  return (
    <div className='savings-account-container'>
      <Card>
        <Card.Content>
          <Card.Header>Savings Account</Card.Header>
          <Card.Description>
            <p style={{ color: 'black' }}>Account Number: {savingsData.account_number}</p>
            <p style={{ color: 'black' }}>Date of Transaction: {savingsData.date_of_transaction}</p>
            <p style={{ color: 'black' }}>Balance: {savingsData.balance}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default SavingsAccount;
