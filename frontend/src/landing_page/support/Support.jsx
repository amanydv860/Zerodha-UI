import React from 'react'
import HeroSection from './HeroSection'
import CreateTicketSection from './CreateTicketSection'


export default function Support() {
  return (
    <>
     <HeroSection/>
      <div className='px-20 py-8 flex justify-start'>
        <h3 className='text-2xl text-gray-700'>To create a ticket, select a relevant topic</h3>
      </div>
      <CreateTicketSection/>
    </>
  )
}
