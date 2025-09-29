import React from 'react'

export default function HeroSection() {
    return (
        <div className='grid grid-cols-2 bg-customColor-anchorcolor p-16'>
            {/* col-1 */}
            <div>
                <a className='text-xl font-semibold text-slate-100 ' href="">Support Portal</a>
                <h3 className=' mt-12  text-slate-100 text-xl'>Search for an answer or browse help topics to create a <br />
                    ticket</h3>

                <input
                    type="text"
                    placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
                    className="w-full h-12 px-4 py-2 border rounded-sm mt-8"
                />

                <div className='flex flex-wrap mt-4'>
                    <a className='pl-4 text-white underline' href="">Track account opening </a>
                    <a className='pl-4 text-white underline' href="">Track segment activation</a>
                    <a className='pl-4 text-white underline' href=""> Intraday margins</a>
                    <a className='pl-4 text-white underline' href="">Kite user manual</a>

                </div>


            </div>

            {/* col-2 */}
            <div>
                <div className='flex justify-end text-slate-100 underline'><a href="">Track tickets</a></div>
                <div className='mt-20 pl-8 text-xl font-semibold text-slate-100'>Featured</div>
                <div className='mt-4 pl-14'>
                    <ul className='list-decimal space-y-4'>
                        <li className='text-slate-100 underline'><a href="">Current Buybacks - August 2024</a></li>
                        <li className='text-slate-100 underline'><a href="">Latest Intraday leverages and Square-off timings</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
