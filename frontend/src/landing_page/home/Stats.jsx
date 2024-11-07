import React from 'react'

export default function Stats() {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 px-20 py-10'>
      <div className=''>
        <h1 className='text-3xl mb-7 font-semibold text-gray-700'>Unbeatable pricing</h1>
        <p className='mb-4  text-gray-600'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a className=' text-customColor-anchorcolor' href="/">See Pricing</a>
      </div>
      <div className='flex items-center justify-between md:flex-row sm:flex-col gap-6'>
        <div className='flex flex-col items-center md:items-start'>
          <img className='w-28 h-20' src="/media/images/pricing1.svg" alt="" />
          <p className='text-xs pt-4 text-center md:text-left'>
            Free account <br /> opening
          </p>
        </div>

        <div className='flex flex-col items-center md:items-start'>
          <img className='w-28 h-20' src="/media/images/pricing2.svg" alt="" />
          <p className='text-xs pt-4 text-center md:text-left'>
            Free equity delivery <br /> and direct mutual funds
          </p>
        </div>

        <div className='flex flex-col items-center md:items-start'>
          <img className='w-28 h-20' src="/media/images/pricing3.svg" alt="" />
          <p className='text-xs pt-4 text-center md:text-left'>
            Intraday and <br /> F&O
          </p>
        </div>
      </div>

    </div>
  )
}
