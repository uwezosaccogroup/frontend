import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Savings from "./components/Savings";
import Loader from "../../components/landingPage/components/Loader";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="my-app">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Profile />} />
              <Route exact path="/deposit" element={<Deposit />} />
              <Route exact path="/withdraw" element={<Withdraw />} />
              <Route exact path="/savings" element={<Savings />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
};

export default Dashboard;
