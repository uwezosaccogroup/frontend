import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import DepositForm from './Deposit';
import Savings from './Savings';
import WithdrawForm from './Withdraw';
import { Card } from 'semantic-ui-react';
// import SavingsAccount from './SavingsAccount';

const ProfileForm = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get('https://uwezosacco.up.railway.app/')
      .then((response) => {
        const lastUser = response.data[response.data.length - 1];
        setUserData(lastUser);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='profile-container'>
      <Card>
        <Card.Content>
          <Card.Header>{userData.name}</Card.Header>
          <Card.Meta style={{ color: 'black' }} >{userData.email}</Card.Meta>
          <Card.Description>
            <p style={{ color: 'black' }} >Phone: {userData.phone}</p>
            <p style={{ color: 'black' }} >Location: {userData.location}</p>
            <p style={{ color: 'black' }} >Occupation: {userData.occupation}</p>
            <p style={{ color: 'black' }} >Account Type: {userData.account_type}</p>
            <p style={{ color: 'black' }} >Next of Kin: {userData.next_of_kin}</p>
            <p style={{ color: 'black' }} >Next of Kin Phone: {userData.next_of_kin_phone}</p>
            <p style={{ color: 'black' }} >Current Balance: {userData.SavingsAccount}</p>
            <p style={{ color: 'black' }} >Savings Balance: {userData.savingsBalance}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};


function Profile() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ProfileForm />} />
        <Route exact path='/withdraw' element={<WithdrawForm />} />
        <Route exact path='/deposit' element={<DepositForm />} />
        <Route exact path='/savings' element={<Savings />} />
      </Routes>
    </>
  );
}

export default Profile;
