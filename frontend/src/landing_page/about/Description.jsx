import React from 'react'

export default function Description() {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8 md:mx-20 px-8 mb-20 border-t'>
        <div className=' text-gray-500 w-4/5 mt-20'>
          <p className='mb-4 '> We kick-started operations on the 15th of August, 2010
            with the goal of breaking all barriers that traders and
            investors face in India in terms of cost, support, and
            technology. We named the company Zerodha, a
            combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className='mb-4'>Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India.
          </p>

          <p className='mb-4'>Over 1+ Crore clients place millions of orders every day
            through our powerful ecosystem of investment
            platforms, contributing over 15% of all Indian retail
            trading volumes.
          </p>
        </div>
        <div className=' text-gray-500 w-4/5 mt-20 '>
          <p className='mb-4'>In addition, we run a number of popular open online
            educational and community initiatives to empower retail
            traders and investors.
          </p>
          <p className='mb-4'>
            <a className='text-customColor-anchorcolor' href="/">Rainmatter</a> , our fintech fund and incubator, has invested
            in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p className='mb-4'>
            And yet, we are always up to something new every day.
            Catch up on the latest updates on our  <a className='text-customColor-anchorcolor' href="/">Blog</a> or see what
            the media is <a className='text-customColor-anchorcolor' href="/">saying about us</a>.
          </p>
        </div>
      </div>
  )
}
