import React from 'react'

export default function PricingImg() {
  return (
    <div>
      <div className="grid grid-cols-3 mb-20 ">
        <div className='text-center'>
          <img className='w-4/6 mx-auto' src="/media/images/pricing1.svg" alt="Free equity delivery" />
          <h2 className='text-center text-3xl mb-8  text-gray-700 font-semibold'>Free equity delivery</h2>
          <p className='text-center'>
            All equity delivery investments (NSE, BSE),<br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className='text-center'>
          <img className='w-4/6 mx-auto' src="/media/images/pricing3.svg" alt="Free equity delivery" />
          <h2 className='text-center text-3xl mb-8  text-gray-700 font-semibold'>Intraday and F&O trades</h2>
          <p className='text-center '>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order <br />
            on intraday trades across equity, currency, and commodity<br />
            trades.Flat ₹20 on all option trades.
          </p>
        </div>

        <div className='text-center'>
          <img className='w-4/6 mx-auto' src="/media/images/pricing1.svg" alt="Free equity delivery" />
          <h2 className='text-center text-3xl mb-8  text-gray-700 font-semibold'>Free direct MF</h2>
          <p className='text-center '>
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  )
}
