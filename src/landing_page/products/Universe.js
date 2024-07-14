import React from "react";

function Universe() {
  return (
    <div className="container mb-5 text-center py-4">
      <div className="row mt-5 fs-5">
        <p>
          Want to know more about our technology stack? Check out the{" "}
          <a href="">Zerodha.tech</a> blog.
        </p>
      </div>
      <div className="row mt-5">
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p className="fs-5 mt-3 mb-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4">
          <a href="">
            <img src="media/images/smallcaseLogo.png" />
            <p className="text-muted mt-2">Thematic investment platform</p>
          </a>
        </div>
        <div className="col-4">
          <a href="">
            <img src="media/images/streakLogo.png" style={{ width: "45%" }} />
            <p className="text-muted mt-2">Algo & strategy platform</p>
          </a>
        </div>
        <div className="col-4">
          <a href="">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "14rem" }}
            />
            <p className="text-muted mt-3">Options trading platform</p>
          </a>
        </div>
        <div className="col-4">
          <a href="">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "50%" }}
              className="mt-5"
            />
            <p className="text-muted mt-2">Asset management</p>
          </a>
        </div>
        <div className="col-4">
          <a href="">
            <img
              src="media/images/tijori.svg"
              style={{ width: "40%" }}
              className="mt-5"
            />
            <p className="text-muted">Fundamental research platform</p>
          </a>
        </div>

        <div className="col-4">
          <a href="">
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "35%" }}
              className="mt-5"
            />
            <p className="text-muted mt-2">Insurance</p>
          </a>
        </div>
      </div>
      <div className="mt-5">
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

export default Universe;
