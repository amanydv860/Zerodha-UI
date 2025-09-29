import React from 'react'


export default function Footer() {
  return (
    <footer className='bg-customColor-footerbg border-t border-gray-100'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-6 md:mx-10 text-center md:text-left'>
      <div>
        <div className="me-auto mb-4">
          <img className='w-3/5 mt-6 mx-auto md:mx-0' src="/media/images/logo.svg" alt="" />
        </div>
        <p className='font-thin text-sm mb-4'>
          © 2010 - 2024, Zerodha Broking Ltd. <br />
          All rights reserved.
        </p>
      </div>
  
      <div>
        <h3 className='text-base font-medium text-gray-700 mb-4'>Company</h3>
        <ul className='space-y-1'>
          <li><a className='text-base font-normal text-gray-600' href="">About</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Product</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Pricing</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Referral programme</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Careers</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Zerodha.tech</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Press & media</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Zerodha Cares (CSR)</a></li>
        </ul>
      </div>
  
      <div>
        <h3 className='text-base font-medium mb-4 text-gray-700'>Support</h3>
        <ul className='space-y-1'>
          <li><a className='text-base font-normal text-gray-600' href="">Support portal</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Z-Connect blog</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">List of charges</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Downloads & resources</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Videos</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Market overview</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">How to file a complaint?</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Status of your complaints</a></li>
        </ul>
      </div>
  
      <div>
        <h3 className='text-base font-medium mb-4 text-gray-700'>Account</h3>
        <ul className='space-y-1'>
          <li><a className='text-base font-normal text-gray-600' href="">Open an account</a></li>
          <li><a className='text-base font-normal text-gray-600' href="">Fund transfer</a></li>
        </ul>
      </div>
    </div>
  
    <div className='grid grid-cols-1 mx-6 md:mx-10 pt-4 sm:grid-cols-2sm:grid-cols-2'>
      <p className='my-4 font-thin text-xs'>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through
        Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
        Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to <a className='text-customColor-anchorcolor' href="">complaints@zerodha.com</a>, for
        DP related to <a className='text-customColor-anchorcolor' href="">dp@zerodha.com</a>. Please ensure you carefully
        read the Risk Disclosure Document as prescribed by SEBI | ICF
      </p>
  
      <p className='mb-4 font-thin text-xs'>
        Procedure to file a complaint on <a className='text-customColor-anchorcolor' href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number
        , E-mail ID. Benefits: Effective Communication, Speedyredressal of the grievances
      </p>
  
      <p className='mb-4 font-thin text-xs'>
        <a className='text-customColor-anchorcolor' href="">Smart Online Dispute Resolution</a> | <a className='text-customColor-anchorcolor' href="">Grievances Redressal Mechanism</a>
      </p>
  
      <p className='mb-4 font-thin text-xs'>
        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
      </p>
  
      <p className='mb-4 font-thin text-xs'>
        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
      </p>
  
      <p className='mb-2 font-thin text-xs'>
        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of
        your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time
        exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.),
        you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO,
        there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to
        make payment in case of allotment. In case of non allotment the funds will remain in your bank account.
        As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone
        claiming to be part of Zerodha and offering such services, please <a className='text-customColor-anchorcolor' href="">create a ticket here</a>.
      </p>
    </div>
  
    <div className="flex flex-col sm:flex-row justify-between mx-6 md:mx-10 mb-4 px-6 md:px-24">
      <a className="font-bold text-xs text-gray-400" href="">NSE</a>
      <a className="font-bold text-xs text-gray-400" href="">BSE</a>
      <a className="font-bold text-xs text-gray-400" href="">MCX</a>
      <a className="font-bold text-xs text-gray-400" href="">Terms & conditions</a>
      <a className="font-bold text-xs text-gray-400" href="">Policies & procedures</a>
      <a className="font-bold text-xs text-gray-400" href="">Privacy policy</a>
      <a className="font-bold text-xs text-gray-400" href="">Disclosure</a>
      <a className="font-bold text-xs text-gray-400" href="">For investor's attention</a>
      <a className="font-bold text-xs text-gray-400" href="">Investor charter</a>
    </div>
  </footer>
  
  )
}
