import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          className="mb-5"
          alt="Hero Image"
        />
        <h1 className="mt-4">Open a Zerodha account</h1>
        <p className="mb-5 mt-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          className="btn btn-primary p-2 fs-5"
          style={{ width: "16%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
