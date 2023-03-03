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
      document.getElementById('current-balance').innerHTML = `&#36; ${data.currentBalance} <span class="text-white"></span>`;
      document.getElementById('savings-balance').innerHTML = `&#36; ${data.savingsBalance} <span class="text-white"></span>`;
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
  return (
    <div class="container d-flex justify-content-center">
  <div class="card p-3">
    <h4 id="user-name"></h4>
    <div class="text-dark">
      <p id="user-email"></p>
      <p id="user-phone"></p>
      <p id="user-occupation"></p>
      <p id="user-location"></p>
      <p id="account-type"></p>
      <p id="next-of-kin"></p>
      <p id="next-of-kin-phone"></p>
    </div>
    <br></br>
    <div class="card-bottom pt-3 px-3 mb-2">
      <div class="d-flex flex-row justify-content-between text-align-center">
        <div class="d-flex flex-column">
          <span className='current-bal' >Current Balance</span>
          <p id="current-balance">&#36;0 <span class="text-white"></span></p>
        </div>
      </div>
    </div>
    <div class="card-bottom pt-3 px-3 mb-2">
      <div class="d-flex flex-row justify-content-between text-align-center">
        <div class="d-flex flex-column">
          <span className='savings-bal' >  Savings Balance</span>
          <p id="savings-balance">&#36;0 <span class="text-white"></span></p>
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
