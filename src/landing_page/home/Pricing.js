import React from "react";

function Pricing() {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row mt-5">
          <div className="col-6">
            <h3>Unbeatable pricing</h3>
            <p className="mt-2">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="" className="mt-2" style={{ textDecoration: "none" }}>
              See pricing<i class="fa-solid fa-arrow-right mx-1"></i>
            </a>
          </div>
          <div className="col-5 ms-5">
            <div className="row">
              <div className="col-6 border p-3 text-center">
                <h3>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <span className="fs-2 ms-1">0</span>
                </h3>
                <p className="mt-4">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
              <div className="col-6 border p-3 text-center">
                <h3>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <span className="fs-2 ms-1">20</span>
                </h3>
                <p className="mt-4">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
