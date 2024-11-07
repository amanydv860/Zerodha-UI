import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { SiConsul } from "react-icons/si";
import { CiCoins1 } from "react-icons/ci";


export default function CreateTicketSection() {
  return (
    <div>
       <div className='mb-32'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4
         pl-20 py-8 pr-32'>
          <div>
            <div className='flex items-center mb-4'>
              <span className='mr-2'><IoAddCircleOutline size={24} /></span>
              <h2 className='text-xl text-slate-800'>Account Opening</h2>
            </div>

            <ul className=' space-y-3 text-customColor-anchorcolor '>
              <li><a href=''>Getting started</a></li>
              <li><a href=''>Online </a></li>
              <li><a href=''>Offline</a></li>
              <li><a href=''>Charges</a></li>
              <li> <a href=''>Company, Partnership and HUF </a></li>
              <li><a href=''>Non Resident Indian (NRI) </a></li>
            </ul>
          </div>

          <div>
            <div className='flex items-center mb-4'>
              <span className='mr-2'><RiAccountCircleLine size={24} /></span>
              <h2 className='text-xl text-slate-800'> Your Zerodha Account </h2>
            </div>
            <ul className=' space-y-3 text-customColor-anchorcolor '>
              <li><a href=''> Login credentials </a></li>
              <li><a href=''> Your Profile </a></li>
              <li><a href=''> Account modification and segment addition </a></li>
              <li><a href=''> CMR & DP ID </a></li>
              <li><a href=''> Nomination </a></li>
              <li><a href=''> Transfer and conversion of shares </a></li>
            </ul>
          </div>

          <div>
            <div className='flex items-center mb-4'>
              <span className='mr-2'><AiOutlineBarChart size={24} /></span>
              <h2 className='text-xl text-slate-800'>Trading and Markets</h2>
            </div>
            <ul className=' space-y-3 text-customColor-anchorcolor '>
              <li><a href=''> Trading FAQs </a></li>
              <li><a href=''> Kite </a></li>
              <li><a href=''> Margins </a></li>
              <li><a href=''> Product and order types </a></li>
              <li><a href=''> Corporate actions </a></li>
              <li><a href=''> Kite features </a></li>
            </ul>
          </div>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4
          pl-20 py-8 pr-32'>
          <div>
            <div className='flex items-center mb-4'>
              <span className='mr-2'><AiOutlineCreditCard size={24} /></span>
              <h2 className='text-xl text-slate-800'> Funds</h2>
            </div>
            <ul className=' space-y-3 text-customColor-anchorcolor '>
              <li><a href=''> Fund withdrawal</a></li>
              <li><a href=''>Adding funds</a></li>
              <li><a href=''>Adding bank accounts</a></li>
              <li><a href=''>eMandates</a></li>
            </ul>
          </div>

          <div>
            <div className='flex items-center mb-4'>
              <span className='mr-2'><SiConsul size={22} /></span>
              <h2 className='text-xl text-slate-800'>Console</h2>
            </div>
            <ul className=' space-y-3 text-customColor-anchorcolor '>
              <li><a href=''>IPO</a></li>
              <li><a href=''>Portfolio</a></li>
              <li><a href=''>Funds statement</a></li>
              <li><a href=''>Profile</a></li>
              <li><a href=''>Reports</a></li>
              <li><a href=''>Referral program</a></li>
            </ul>
          </div>

          <div>
            <div className='flex items-center mb-4'>
              <span className='mr-2'><CiCoins1 size={24} /></span>
              <h2 className='text-xl text-slate-800'>Coin</h2>
            </div>
            <ul className=' space-y-3 text-customColor-anchorcolor '>
              <li><a href=''>Understanding mutual funds and Coin</a></li>
              <li><a href=''>Coin app</a></li>
              <li><a href=''>Coin web</a></li>
              <li><a href=''>Transactions and reports</a></li>
              <li><a href=''>National Pension Scheme (NPS)</a></li>

            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}
