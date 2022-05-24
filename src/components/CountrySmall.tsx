import React from 'react'

const CountrySmall = ({setScreenShown}) => {

  return (
    <a className='rounded shadow-md' href="#" onClick={()=> setScreenShown(`details`)}>
    <div className="grid grid-rows-2  " >
      
        <div>
          <img className='rounded-t' src="/test.jpg" />
        </div>
        <div className='p-6 text-sm bg-white dark:bg-[#2B3945] dark:text-white '>
          <h2 className='mb-4 text-base font-extrabold'>Germany</h2>

          <div><strong className='font-semibold mr-1'>Population:</strong> <span className='font-light'>8,822,000</span></div>
          <div><strong className='font-semibold mr-1'>Region:</strong> <span className='font-light' >Europe</span></div>
          <div><strong className='font-semibold mr-1'>Capital:</strong><span className='font-light'>Berlin</span></div>



        </div>
      
    </div>
    </a>
  )
}

export default CountrySmall