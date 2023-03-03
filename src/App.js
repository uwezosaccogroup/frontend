import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Landing from "./components/landingPage/Landing";
import Header from "./components/landingPage/components/Header";
// import NavBar from "./components/NavBar";
// import Profile from "./components/Profile";
// import Deposit from "./components/Deposit";
// import Withdraw from "./components/Withdraw";
// import Savings from "./components/Savings";

const App = () => (
  <>
    {/* <Header /> */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Landing />} />
        {/* <Route exact path="/deposit" element={<Deposit />} /> */}
        {/* <Route exact path="/withdraw" element={<Withdraw />} /> */}
        {/* <Route exact path="/savings" element={<Savings />} /> */}
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
