import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom text-center pb-5">
        <h1>Pricing</h1>
        <p className="mt-2 fs-4">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row mt-5 text-center border-bottom pb-5">
        <div className="col-4 p-4">
          <img src="media/images/pricing0.svg" />
          <h1 className="mt-3 fs-3">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
        <img src="media/images/other-trades.svg" />
          <h1 className="mt-3 fs-3">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
        <img src="media/images/pricing0.svg" />
          <h1 className="mt-3 fs-3">Free direct MF</h1>
          <p className="text-muted mt-3">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
