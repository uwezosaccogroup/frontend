import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import Savings from './Savings';
import { Card } from 'semantic-ui-react';
import SavingsAccount from './SavingsAccount';
import CurrentAccount from './CurrentAccount';

const ProfileForm = () => {
  const [userData, setUserData] = useState({});
  const [hasCurrentAccount, setHasCurrentAccount] = useState(false);

  useEffect(() => {
    axios
      .get('https://uwezosacco.up.railway.app/')
      .then((response) => {
        const lastUser = response.data[response.data.length - 1];
        setUserData(lastUser);
        setHasCurrentAccount(lastUser.account_type === 'current');
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='profile-container'>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{userData.name}</Card.Header>
            <Card.Meta style={{ color: 'black' }}>Email:{userData.email}</Card.Meta>
            <Card.Description>
              <p style={{ color: 'black' }}>Phone: {userData.phone}</p>
              <p style={{ color: 'black' }}>Location: {userData.location}</p>
              <p style={{ color: 'black' }}>Occupation: {userData.occupation}</p>
              <p style={{ color: 'black' }}>Account Type: {userData.account_type}</p>
              <p style={{ color: 'black' }}>Next of Kin: {userData.next_of_kin}</p>
              <p style={{ color: 'black' }}>Next of Kin Phone: {userData.next_of_kin_phone}</p>
            </Card.Description>
          </Card.Content>
        </Card>
        {hasCurrentAccount ? (
          <Card>
            <Card.Content>
              <Card.Header>Current Account</Card.Header>
              <Card.Description>
                <CurrentAccount />
              </Card.Description>
            </Card.Content>
          </Card>
        ) : (
          <Card>
            <Card.Content>
              <Card.Header>Savings Account</Card.Header>
              <Card.Description>
                <SavingsAccount />
              </Card.Description>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    </div>
  );
};

function Profile() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ProfileForm />} />
        {/* <Route exact path='/withdraw' element={<WithdrawForm />} />
        <Route exact path='/deposit' element={<DepositForm />} /> */}
        <Route exact path='/savings' element={<Savings />} />
      </Routes>
    </>
  );
}

export default Profile;
