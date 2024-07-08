import React from 'react';

function Awards() {
  return ( 
    <>
      <div className='container mt-5 mb-5'>
        <div className='row mt-5'>
          <div className='col-6'>
          <img src='media/images/largestBroker.svg' className=''/>
          </div>
          <div className='col-6 p-4'>
            <h2 className='mb-4'>Largest stock broker in India</h2>
            <p className='mb-4'>
              1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
            </p>
            <div className='row'>
              <div className='col-6 mb-4'>
                <ul>
                  <li>
                    <p>Futures and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className='col-6 mb-4'>
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            <img src='media/images/pressLogos.png' />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;