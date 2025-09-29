import React from 'react'

export default function Universe() {
  return (
    <div>
      <div className='flex justify-center m-20 px-10'>
        <h2 className='text-xl text-slate-600'>Want to know more about our technology stack? Check out
          the <a href="" className='text-customColor-anchorcolor'>Zerodha.tech</a> blog.</h2>
      </div>

      <div className='flex flex-col items-center justify-center m-20 px-10'>
        <h2 className='mt-4 text-4xl text-slate-700 font-semibold'>The Zerodha Universe</h2>
        <p className='mt-8  text-slate-600'>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      {/* col 2 */}
      <div className='grid grid-cols-3 mx-20 px-10 mb-16'>
        <div className='flex flex-col justify-center items-center text-center'>
          <img className='w-3/5 mb-6  ' src="/media/images/zerodhaFundhouse.png" alt="" />
          <p className='font-sans text-slate-600 text-xs w-3/5 '>
            Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center '>
          <img className='w-3/4 mb-6  ' src="\media\images\sensibullLogo.svg" alt="" />
          <p className='font-sans text-slate-600 text-xs w-4/5 '>
            Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
          <img className='w-2/5 mb-6  ' src="/media/images/tijori.svg" alt="" />
          <p className='font-sans text-slate-600 text-xs w-3/5 '>
            Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>

      </div>
      {/* col2 */}
      <div className='grid grid-cols-3 mx-20 px-10 mb-16'>
        <div className='flex flex-col items-center text-center'>
          <img className='w-3/6 mb-6  ' src="\media\images\streakLogo.png" alt="" />
          <p className='font-sans text-slate-600 text-xs w-3/5 '>
            Systematic trading platform
            that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img className='w-3/5 mb-6  ' src="\media\images\smallcaseLogo.png" alt="" />
          <p className='font-sans text-slate-600 text-xs w-3/5 '>
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img className='w-2/5 mb-6  ' src="\media\images\dittoLogo.png" alt="" />
          <p className='font-sans text-slate-600 text-xs w-3/5 '>
            Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
          </p>
        </div>

      </div>


      <div className="flex justify-center mb-16">
        <button className="items-center w-40 rounded-md bg-customColor-anchorcolor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black">
          Sign up now
        </button>
      </div>


    </div>
  )
}
