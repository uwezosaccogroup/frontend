/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes } from 'react-router-dom';
import React from "react";
import NavBar from './NavBar';

import DepositForm from "./Deposit"
import Savings from "./Savings"
import WithdrawForm from "./Withdraw";

const ProfileForm = () => {

  
  fetch("https://localhost:9292/users/123")
    .then(response => response.json())
    .then(data => {
      document.getElementById('user-name').textContent = data.name;
      document.getElementById('user-email').textContent = data.email;
      document.getElementById('user-phone').textContent = data.phone;
      document.getElementById('user-occupation').textContent = data.occupation;
      document.getElementById('user-location').textContent = data.location;
      document.getElementById('account-type').textContent = data.accountType;
      document.getElementById('next-of-kin').textContent = data.nextOfKin;
      document.getElementById('next-of-kin-phone').textContent = data.nextOfKinPhone;
      document.getElementById('current-balance').innerHTML = `&#36; ${data.currentBalance} <span class="text-black"></span>`;
      document.getElementById('savings-balance').innerHTML = `&#36; ${data.savingsBalance} <span class="text-black"></span>`;
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
  return (
    <div className='profile-container' >
    <div className="ui centered grid">
    <div class="ui card">
      <div class="content">
        <h4 id="user-name" class="header">John Doe</h4>
        <div class="description">
          <p id="user-email">john.doe@example.com</p>
          <p id="user-phone">123-456-7890</p>
          <p id="user-occupation">Software Engineer</p>
          <p id="user-location">San Francisco, CA</p>
          <p id="account-type">Premium</p>
          <p id="next-of-kin">Jane Doe</p>
          <p id="next-of-kin-phone">987-654-3210</p>
        </div>
      </div>
      <div class="extra content">
        <div class="ui two column grid">
          <div class="column">
            <p id='current-balance' > CURRENT BALANCE</p>
          </div>
          <div class="column">
          <p id='savings-balance' > SAVINGS BALANCE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </div>
  );
};

function Profile() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={< ProfileForm/>} />
        <Route exact path="/withdraw" element={<WithdrawForm />} />
        <Route exact path="/deposit" element={<DepositForm />} />
        <Route exact path="/savings" element={<Savings />} />
      </Routes>
    </>
  );
}

export default Profile;
