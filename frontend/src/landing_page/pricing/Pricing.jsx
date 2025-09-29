import React from 'react'
import OpenAccount from '../OpenAccount'
import Header from './Header'
import PricingImg from './PricingImg'
import BrokageListTag from './BrokageListTag'
import List from './List'

export default function Pricing() {
  return (
    <div>
      <Header/>
      <div className='grid grid-cols-1 border-t mb-4 mx-16'></div>
      <PricingImg/>
      <div className='grid grid-cols-1 border-t mb-4'></div>
      <div><OpenAccount /></div>
      <BrokageListTag/>
      <List/>
    </div>

  )
}
