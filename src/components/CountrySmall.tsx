import React from 'react'

const CountrySmall = ({setScreenShown, name, population, region, capital, png, setDetails, commonName}) => {

  return (
    <a className='rounded bg-white dark:bg-[#2B3945] shadow-md' href="#" onClick={()=>{ setScreenShown(`details`); setDetails(commonName.toLowerCase())}}>
    <div className="grid grid-rows-2 h-full  " >
      
        <div className='dark:bg-[#2B3945]'>
          <img className='rounded-t w-full object-contain' src={png} />
        </div>
        <div className='p-6 text-sm bg-white dark:bg-[#2B3945] h-full dark:text-white '>
          <h2 className='mb-4 text-base font-extrabold'>{name}</h2>

          <div><strong className='font-semibold mr-1'>Population:</strong> <span className='font-light'>{population}</span></div>
          <div><strong className='font-semibold mr-1'>Region:</strong> <span className='font-light' >{region}</span></div>
          <div><strong className='font-semibold mr-1'>Capital:</strong><span className='font-light'>{capital}</span></div>



        </div>
      
    </div>
    </a>
  )
}

export default CountrySmall