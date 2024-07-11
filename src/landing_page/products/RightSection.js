import React from "react";

function RightSection({
  image,
  productTitle,
  ProductDescription,
  leranMoreLink,
}) {
  return (
    <div className="container mb-5">
      <div className="mt-5 row">
        <div className="mt-5 col-4 px-1">
          <h1 className="fs-2 mt-5 py-3">{productTitle}</h1>
          <p className="fs-5">{ProductDescription}</p>
          <div className="mt-3">
            <a href={leranMoreLink} className="">
              Learn More<i class="fa-solid fa-arrow-right mx-1"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
