import React from "react";

function LeftSection({
  image,
  productTitle,
  ProductDescription,
  tryDemoLink,
  leranMoreLink,
  googlePlayLink,
  appStoreLink,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-2">
          <img src={image} />
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5">
          <h1 className="fs-2">{productTitle}</h1>
          <p className="fs-5 mt-3">{ProductDescription}</p>
          <div className="mt-3">
            <a href={tryDemoLink} className="ms-3">
              Try demo<i class="fa-solid fa-arrow-right mx-1"></i>
            </a>
            <a href={leranMoreLink} className="ms-5">
              Learn More<i class="fa-solid fa-arrow-right mx-1"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlayLink} className="ms-1">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStoreLink} className="ms-3">
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
