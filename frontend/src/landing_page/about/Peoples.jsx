import React from 'react'

export default function Peoples() {
  return (
   <div>
     <div className='text-center text-3xl font-semibold  text-gray-600 mb-20'>People</div>
     <div className='grid md:grid-cols-2 sm:grid-cols-1 mb-20'>
  <div className='flex md:justify-end justify-center sm:justify-center'>
    <img className='bg-cover rounded-full w-2/5 sm:w-1/2 sm:mr-0 md:mr-16' src="/media/images/nithinKamath.jpg" alt="" />
  </div>
  <div className='text-gray-500 w-4/5 my-3 ml-4 sm:ml-4'>
    <p className='mb-4'>
      Nithin bootstrapped and founded Zerodha in 2010 to overcome the
      hurdles he faced during his decade-long stint as a trader. Today,
      Zerodha has changed the landscape of the Indian broking industry.
    </p>
    <p className='mb-4'>
      He is a member of the SEBI Secondary Market Advisory Committee
      (SMAC) and the Market Data Advisory Committee (MDAC).
    </p>
    <p className='mb-4'>
      Playing basketball is his zen.
    </p>
    <p className='mb-4'>
      Connect on
      <a className='text-customColor-anchorcolor ml-2' href="/">Homepage</a> /
      <a className='text-customColor-anchorcolor ml-2' href="/">TradingQnA</a> /
      <a className='text-customColor-anchorcolor ml-2' href="/">Twitter</a>
    </p>
  </div>
</div>

   </div>
  )
}
