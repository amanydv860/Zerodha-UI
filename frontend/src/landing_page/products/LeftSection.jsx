import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

export default function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className='grid grid-cols-2 my-16'>
      <div className=' p-12'>
        <img src={imageUrl} alt="" />
      </div>

      <div className='flex justify-end'>
        <div className='w-4/5 pl-10 mt-16 '>
          <h1 className='text-4xl mb-6'>{productName}</h1>
          <p className='w-3/4 mb-6'>{productDescription}</p>
          <div className='flex items-center justify-between w-3/5 text-customColor-anchorcolor mb-6'>
            <a href="#" className="flex items-center">
              {tryDemo && (
                <>
                  {tryDemo} <MdArrowRightAlt className="mt-1" size={24} />
                </>
              )}
            </a>


            <a href="#" className="flex items-center">
              {learnMore && (
                <>
                  {learnMore} <MdArrowRightAlt className="mt-1" size={24} />
                </>
              )}
            </a>

          </div>
          <div className='flex items-center justify-between w-3/5'>
            <a href=""> <img src="/media/images/googlePlayBadge.svg" alt="" /></a>
            <a href=""><img src="/media/images/appstoreBadge.svg" alt="" /></a>
          </div>
        </div>
      </div>

    </div>
  )
}
