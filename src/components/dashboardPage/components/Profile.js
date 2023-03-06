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
    <div className='profile-container' style={{ backgroundColor: 'black', color: 'white' }}>
      <Card.Group>
        <Card style={{ backgroundColor: 'black', color: 'white' }}>
          <Card.Content>
            <Card.Header style={{color: 'white'}}>{userData.name}</Card.Header>
            <Card.Meta style={{color: 'white'}} >Email:{userData.email}</Card.Meta>
            <br></br>
            <Card.Description style={{ color: 'white' }}>
              <p>Phone: {userData.phone}</p>
              <br></br>
              <p>Location: {userData.location}</p>
              <br></br>
              <p>Occupation: {userData.occupation}</p>
               <br></br>
              <p>Account Type: {userData.account_type}</p>
              <br></br>
              <p>Next of Kin: {userData.next_of_kin}</p>
              <br></br>
              <p>Next of Kin Phone: {userData.next_of_kin_phone}</p>
            </Card.Description>
          </Card.Content>
        </Card>
        {hasCurrentAccount ? (
          <Card style={{ backgroundColor: 'black', color: 'white' }}>
            <Card.Content>
              <Card.Header style={{color: 'white'}} >Current Account</Card.Header>
              <Card.Description style={{ color: 'white' }}>
                <CurrentAccount />
              </Card.Description>
            </Card.Content>
          </Card>
        ) : (
          <Card style={{ backgroundColor: 'black', color: 'white' }}>
            <Card.Content>
              <Card.Header style={{color: 'white'}} >Savings Account</Card.Header>
              <Card.Description style={{ color: 'white' }}>
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
