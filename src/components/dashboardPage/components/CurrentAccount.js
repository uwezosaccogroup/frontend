import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

function CurrentAccount() {
const [currentData, setCurrentData] = useState({});

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
</Card>
</div>
);
}

export default CurrentAccount;