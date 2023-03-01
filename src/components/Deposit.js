import React from "react"

const Deposit = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="card p-3">
        <h4 class="">Deposit Form</h4>
        <div class="text-dark">
          <p>
            Current Balance <span> = &#36; 4,000</span>
          </p>
        </div>
        <div class="card-bottom pt-3 px-3 mb-2">
          <form class="d-flex flex-row justify-content-between text-align-center">
            <div class="d-flex flex-column">
              <label for="curramount" class="form-label">
                Enter Amount
              </label>
              <p>
                <span class="text-white">
                  <input
                    type="number"
                    id="curramount"
                    class="form-control"
                    aria-describedby="amountDeposit"
                    placeholder="$ 1,000"
                  />
                </span>
                <div id="amountDeposit" class="form-text">
                  Your amount must not be less than 1,000. This sacco will not
                  tolerate poverty.
                </div>
              </p>
            </div>
            <button type="submit" class="btn btn-secondary submit">
              <i class="fas fa-arrow-right text-white"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Deposit
