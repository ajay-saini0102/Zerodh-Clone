import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        image="/media/images/kite.png"
        productTitle="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemoLink=""
        leranMoreLink=""
        googlePlayLink=""
        appStoreLink=""
      />
      <RightSection
        image="/media/images/console.png"
        productTitle="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        leranMoreLink=""
      />
      <LeftSection
        image="/media/images/coin.png"
        productTitle="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemoLink=""
        leranMoreLink=""
        googlePlayLink=""
        appStoreLink=""
      />
      <RightSection
        image="/media/images/kiteconnect.png"
        productTitle="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        leranMoreLink=""
      />
      <LeftSection
        image="/media/images/varsity.png"
        productTitle="Kite"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemoLink=""
        leranMoreLink=""
        googlePlayLink=""
        appStoreLink=""
      />
      <Universe />
    </>
  );
}

export default ProductsPage;
