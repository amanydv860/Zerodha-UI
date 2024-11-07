import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Header() {
    return (
        <div className='grid grid-cols-1 place-items-center mx-20 mt-20'>
            <h1 className='text-5xl text-slate-700 font-medium mb-6'>Technology</h1>
            <h3 className='mb-8 text-xl text-slate-600'>Sleek, modern, and intuitive trading platforms</h3>

            <p className='flex items-center'>
                Check out our
                <a href="" className="flex items-center pl-2 text-customColor-anchorcolor">
                    investment offerings 
                    <HiOutlineArrowLongRight className="inline-block ml-1" style={{ verticalAlign: 'middle' }} />
                </a>
            </p>

        </div>
    )
}
