/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import logo from "../logo.ico"
import NavBar from "react-bootstrap/Navbar"

const Header = () => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid p-2 bd-highlight">
        <a class="navbar-brand" href="#">
          Uwezo Sacco Group
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
              <a class="nav-link active" aria-current="page" href="#">
                Deposit
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Withdraw
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Savings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
