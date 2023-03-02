import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";



function Navbar() {
  const [aboutData, setAboutData] = useState({});
  const state = useSelector((state)=> state.handleCart)

  useEffect(() => {
    axios
      .get("   ")
      .then((res) => {
        setAboutData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
        Uwezo Sacco
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
           
            <NavLink className="nav-link" to="/about">

                About
              </NavLink>
            <NavLink className="nav-link" to="/services">
                services
              </NavLink>
            <li className="nav-item">
            <p>{aboutData.title}</p>
            <p>{aboutData.description}</p>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
