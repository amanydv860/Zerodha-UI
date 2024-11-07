import React from 'react'

export default function OpenAccount() {
  return (
    <div className='grid grid-cols-1 text-center py-10'>
  <h1 className='text-3xl mb-7 font-semibold text-gray-700'>Open a Zerodha account</h1>
  <p className='mb-4 text-gray-600 mx-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
  <div className="flex justify-center mb-10">
    <a href="http://localhost:3002/api/signup">
    <button className="items-center w-40 rounded-md bg-customColor-anchorcolor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black">
      Sign up now
    </button>
    </a>
  </div>
</div>

  )
}
