import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Landing from "./components/landingPage/Landing";
import NavBar from "./components/dashboardPage/components/NavBar";
import Profile from "./components/dashboardPage/components/Profile";
import Deposit from "./components/dashboardPage/components/Deposit";
import Withdraw from "./components/dashboardPage/components/Withdraw";
import Savings from "./components/dashboardPage/components/Savings";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/dashboard" element={<NavBar />} />
        <Route exact path="/dashboard/profile" element={<Profile />} />
        <Route exact path="/dashboard/deposit" element={<Deposit />} />
        <Route exact path="/dashboard/withdraw" element={<Withdraw />} />
        <Route exact path="/dashboard/savings" element={<Savings />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
