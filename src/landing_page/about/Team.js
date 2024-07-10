import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row mt-5 mb-4 text-center">
        <h3>People</h3>
      </div>
      <div className="row text-muted">
        <div className="col-5 ms-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            className="border mb-3 rounded-circle"
            style={{width:"18rem"}}
          />
          <h5>Nithin Kamath</h5>
          <p className="mt-3">Founder, CEO</p>
        </div>
        <div className="col-6 fs-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
