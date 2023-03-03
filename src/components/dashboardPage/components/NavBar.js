/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid p-2 bd-highlight">
        <a class="navbar-brand" href="/dashboard/profile">
          <FontAwesomeIcon icon={faUser} className="navbar-brand fos-brand" />
          Dashboard
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/dashboard/deposit">
                Deposit
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/dashboard/withdraw">
                Withdraw
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/dashboard/savings">
                Savings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default NavBar;
