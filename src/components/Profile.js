/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const Profile = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="card p-3">
        <h4 class="">Josiah Kamau</h4>
        <div class="text-dark">
          <p>business.josia@gmail.com</p>
        </div>
        <div class="card-bottom pt-3 px-3 mb-2">
          <div class="d-flex flex-row justify-content-between text-align-center">
            <div class="d-flex flex-column">
              <span>Current Balance</span>
              <p>
                &#36; <span class="text-white">88,989</span>
              </p>
            </div>
            <button class="btn btn-secondary">
              <i class="fas fa-arrow-right text-white"></i>
            </button>
          </div>
        </div>
        <div class="card-bottom pt-3 px-3 mb-2">
          <div class="d-flex flex-row justify-content-between text-align-center">
            <div class="d-flex flex-column">
              <span>Savings Balance</span>
              <p>
                &#36; <span class="text-white">100,000,989</span>
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
