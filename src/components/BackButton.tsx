import React from 'react'

const BackButton = ({setScreenShown}) => {
    return (
        <div className='relative'>
            <div>
                <button onClick={()=> setScreenShown('main')} className='p-2 rounded px-5 pl-10 shadow-md  font-semibold text-sm '>Back</button>
            </div>
            <div className='absolute top-0 p-2 pt-[6px]'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 19.625 4.375 12 12 4.375 13.075 5.45 7.25 11.25H19.625V12.75H7.25L13.075 18.55Z" /></svg>
            </div>
        </div>
    )
}

export default BackButton