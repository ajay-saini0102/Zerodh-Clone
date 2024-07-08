import React from 'react';

function Hero() {
  return( 
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
          <img src='media/images/homeHero.png' className='mb-5' alt='Hero Image'/>
          <h1 className='mt-4'>Invest in everything</h1>
          <p className='mb-5'>
          Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <button className='btn btn-primary p-2 fs-5' style={{width:"16%", margin: "0 auto"}}>Sign up now</button>
      </div>     
    </div>
  );
}

export default Hero;