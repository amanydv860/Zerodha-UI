import React from 'react'

export default function Education() {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 p-10'>
      <div className='p-8'>
        <img className='w-3/4' src="/media/images/education.svg" alt="" />
      </div>
      <div className='p-8'>
        <h1 className='text-2xl mb-5'>Free and open market education</h1>
        <p className='my-4  text-gray-600'>Varsity, the largest online stock market education book in the world <br />
          covering everything from the basics to advanced trading.</p>
        <a className=' text-customColor-anchorcolor' href="">Varsity</a>

        
        <p className='mt-8 mb-4'>TradingQ&A, the most active trading and investment community in <br />
           India for all your market related queries..</p>
        <a className=' text-customColor-anchorcolor' href="">TradingQ&A</a>
      </div>
    </div>
  )
}
