import '../App.css';

import React, { useState }  from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Logo from "./Logo";
import Services from "./Services";


import { Routes, Router, Route } from "react-router-dom";

function App() {
  const [aboutData, setAboutData] = useState({});

  const handleAboutData = (data) => {
    setAboutData(data);
  }

  return (
    <>
    <Navbar onAboutData={handleAboutData} />
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/logo" component={Logo} />
    <Route exact path="/services" component={Services} />
    </Switch>
  </Router>
  </>
  );
}

export default App;

