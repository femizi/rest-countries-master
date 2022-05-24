import React from 'react'

const Header = () => {
  return (
    <header className="App-header bg-white dark:bg-[#2B3945] dark:text-white flex justify-between p-4 px-8 sticky top-0 shadow-md w-full">
      <div>
        <h1 className='font-extrabold text-black text-2xl'> Where in the world?
        </h1>
      </div>
      <div className='flex gap-2'>
        <div >
          <button>
            <span className="material-symbols-outlined">
              dark_mode
            </span>
          </button></div>
        <div className='font-semibold'>Dark Mode</div>
      </div>
    </header>
  )
}

export default Header