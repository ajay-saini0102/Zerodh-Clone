import React from 'react';

function Stats() {
  return ( 
    <>
      <div className='container p-3 mb-5'>
        <div className='row mt-5'>
          <div className='col-6'> 
            <h3 className='mt-5 mb-5'>Turst with confidence</h3>
            <h4>Customer-first always</h4>
            <p className='mt-2 mb-4 text-muted'>
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.
            </p>
            <h4>No spam or gimmicks</h4>
            <p className='mt-2 mb-4 text-muted'>
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
            </p>
            <h4>The Zerodha universe</h4>
            <p className='mt-2 mb-4 text-muted'>
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
            </p>
            <h4>Do better with money</h4>
            <p className='mt-2 mb-4 text-muted'>
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
            </p>
          </div>
          <div className='col-6 mt-5'> 
            <img src='media/images/ecosystem.png' style={{width: "90%"}}/>
            <div className='text-center'>
              <a href='' className='mx-4' style={{textDecoration :"none"}}>Explore our products<i class="fa-solid fa-arrow-right mx-1"></i></a>
              <a href='' className='mx-4' style={{textDecoration :"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right mx-1"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}

export default Stats;