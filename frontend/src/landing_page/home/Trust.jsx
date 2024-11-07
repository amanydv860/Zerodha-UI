import React from 'react'

export default function Trust() {
  return (
    <div className='py-5 pb-30'>
      <div className='grid md:grid-cols-2 sm:grid-cols-2  pb-4'>
        <div className='mb-6 p-10'>
          <h1 className='text-3xl font-semibold text-gray-700'>Trust with confidence</h1>
          <h4 className='text-xl font-medium mt-10  text-gray-700'>Customer-first always</h4>
          <p className='mt-1 mb-8 text-gray-600'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <h4 className='text-xl font-medium  text-gray-700'>No spam or gimmicks</h4>
          <p className='mt-1 mb-8 text-gray-600'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h4 className='text-xl font-medium  text-gray-700'>The Zerodha universe</h4>
          <p className='mt-1 mb-8 text-gray-600'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h4 className='text-xl font-medium  text-gray-700'>Do better with money</h4>
          <p className='mt-1 text-gray-600'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div >
          <img
            src="/media/images/ecosystem.png"
            alt=""
            className='pr-10 pt-10 sm:4/5 sm:pl-3' />
          <div className="grid grid-cols-2">
            <a href="" className='text-center text-customColor-anchorcolor'>Explore Our Products</a>
            <a href="" className='text-customColor-anchorcolor'>Try Kite demo</a>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 place-items-center '>
        <img
          src="/media/images/pressLogos.png"
          alt=""
          className='w-3/5'
        />
      </div>
    </div>
  )
}
