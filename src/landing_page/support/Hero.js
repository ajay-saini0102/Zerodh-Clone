import React from "react";

function Hero() {
  return (
    <section className="container-fluid mb-5 pb-5" id="supportBox">
      <div className="p-5 mt-5" id="supportWrapper">
        <a href="" style={{ color: "white" }} className="fs-4">
          Support Portal
        </a>
        <a href="" style={{ color: "white" }} className="fs-5">
          Track tickets
        </a>
      </div>
      <div className="row px-5">
        <div className="col-6 p-3">
          <h2>Search for an answer or browse help topics to create a ticket</h2>
          <div class="input-group mb-3 bg-white mt-4 rounded">
            <input
              type="text"
              class="form-control p-3"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <button
              class="btn"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <a href="" style={{ color: "white" }}>Track account opening </a> 
          <a href=""  style={{ color: "white" }}>&nbsp;&nbsp;Track segment activation </a>
          <a href=""  style={{ color: "white" }}>&nbsp;&nbsp;Intraday margins </a><br />
          <a href=""  style={{ color: "white" }}>Kite user manual</a>
        </div>
        <div className="col-6 p-5">
        <h2>Featured</h2>
        <p>Due to a system upgrade, HDFC Bank is experiencing a global downtime from 7 pm 12th July to 4:30 pm 13th July. HDFC UPI and net banking payments may not be available, and direct transfers using NEFT, IMPS, and RTGS may be delayed. <a href=""  style={{ color: "white" }}>Learn more.</a></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
