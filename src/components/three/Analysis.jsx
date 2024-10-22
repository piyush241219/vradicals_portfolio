import React from 'react'

export default function Analysis() {
  return (
    <div className='mt-10  md:h-[40vh] flex items-center analysis'>
        <div className="flex justify-between flex-col md:flex-row gap-10 text-white w-full px-10">
            <p className='md:border-r-2 h-10 px-5 text-lg capitalize'>Meet Our Reached Customers Worldwide</p>
            <p className='md:border-r-2 h-10 px-5 flex flex-col'> <span className='text-[#B366CF] text-2xl font-bold'>1k</span>This Month</p>
            <p className='md:border-r-2 h-10 px-5 flex flex-col'> <span className='text-[#B366CF] text-2xl font-bold'>22k</span>This Year</p>
            <p className='md:border-r-2 h-10 px-5 flex flex-col'> <span className='text-[#B366CF] text-2xl font-bold'>23k</span>Total</p>
        </div>
    </div>
  )
}
