import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-9 p-4">
          <h1 className="fs-4 text-center">
            <a href="">Brokerage calculator</a>
          </h1>
          <ul className="text-muted mt-4" style={{fontSize: "0.8rem", lineHeight: "2"}}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower)
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-3 p-4">
        <h1 className="fs-4 text-center">
            <a href="">List of charges</a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
