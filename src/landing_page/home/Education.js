import React from "react";

function Education() {
  return (
    <>
      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-5">
            <img
              src="media/images/education.svg"
              className="mt-5"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-1"></div>
          <div className="col-6 mt-5">
            <h4 className="mt-3">Free and open market education</h4>
            <p className="mt-4">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" className="mt-3" style={{ textDecoration: "none" }}>
              Varsity<i class="fa-solid fa-arrow-right mx-1"></i>
            </a>
            <p className="mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" className="mt-2" style={{ textDecoration: "none" }}>
              TradingQ&A<i class="fa-solid fa-arrow-right mx-1"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
