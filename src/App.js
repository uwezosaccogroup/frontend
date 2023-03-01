import React, { Fragment } from "react"

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"


import Header from "./components/Header"
import Profile from "./components/Profile"

const App = () => (
  <Fragment>
    <Header />
    <main>
      <Profile/>
    </main>
  </Fragment>
)

export default App
