import React from 'react'

const DetailsText = () => {
    return (
        <div className='p-6 text-sm'>
            <div>
                <h1 className='font-bold text-xl mb-4'>Belgium </h1>
            </div>
            <div className='grid grid-cols-2'>
                <div className='text-sm grid gap-2' >
                    <div>
                        <strong >Native name:</strong><span> njdshk </span>
                    </div>
                    <div>
                        <strong>Population:</strong> <span>8,822,000</span>
                    </div>
                    <div>
                        <strong>Region:</strong> <span>Europe</span>
                    </div>
                    <div>
                        <strong>Sub Region:</strong> <span>hysduhrwu</span>
                    </div>
                    <div>
                        <strong>Capital:</strong> <span>Berlin</span>
                    </div>
                </div>
                <div className=''>
                    <div className='mb-1'>
                        <strong>Top Level Domain:</strong> <span>hysduhrwu</span>
                    </div>
                    <div className='mb-1'>
                        <strong>Currencies:</strong> <span>hysduhrwu</span>
                    </div>
                    <div>
                        <strong>Languages:</strong> <span>hysduhrwu</span>
                    </div>
                </div>
            </div>
            <div className='flex mt-12'>
                <div>
                    <strong>Border Countries:</strong>

                </div>
                <div className='flex gap-2 ml-3'>
                    <button className='px-2 shadow'> France</button>
                    <button className='px-2 shadow'> France</button>
                </div>
            </div>
        </div>
    )
}

export default DetailsText