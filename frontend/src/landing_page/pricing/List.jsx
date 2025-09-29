import React from 'react'

export default function List() {
  return (
    
      <div className='grid-cols-1 ml-32'>
        <ul className='list-disc text-xs text-gray-600 mb-20'>
          <li className='mb-2'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
          <li className='mb-2'>Digital contract notes will be sent via e-mail.</li>
          <li className='mb-2'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
          <li className='mb-2'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
          <li className='mb-2'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
          <li className='mb-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
        </ul>
      </div>

  )
}
