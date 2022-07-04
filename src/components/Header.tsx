import React from 'react'

const Header = ({setMode, mode}) => {
  return (
    <header className="App-header bg-white isolate z-40 dark:bg-[#2B3945] dark:text-white flex justify-between p-4 px-8 sticky top-0 shadow-md w-full">
      <div>
        <h1 className='font-extrabold text-black dark:text-white text-2xl'> Where in the world?
        </h1>
      </div>
      <div >
        <div  >
          <button className='flex gap-2' onClick={()=>setMode(!mode)}>
            <span className="material-symbols-outlined">
              dark_mode
            </span>
            <div className='font-semibold'>Dark Mode</div>
          </button>   </div>
      
      </div>
    </header>
  )
}

export default Header