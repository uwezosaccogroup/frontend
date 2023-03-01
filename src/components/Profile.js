/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import logo from "../logo.ico"

const Profile = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="card p-3">
        <h4 class="">Josiah Kamau</h4>
        <p class="text-dark">business.josia@gmail.com</p>
        <div class="card-bottom pt-3 px-3 mb-2">
          <div class="d-flex flex-row justify-content-between text-align-center">
            <div class="d-flex flex-column">
              <span>Balance amount</span>
              <p>
                &#36; <span class="text-white">88,989</span>
              </p>
            </div>
            <button class="btn btn-secondary">
              <i class="fas fa-arrow-right text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
