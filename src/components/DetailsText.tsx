import React from 'react'

const DetailsText = ({ country }) => {
    const buttonOne = country?.borders !== undefined ? country.borders[0] : `None`
    const buttonTwo = country?.borders !== undefined ? country.borders[1] : `None`


    return (
        <div className='p-6 text-sm'>
            <div>
                <h1 className='font-bold text-xl mb-4'>{country.name.common} </h1>
            </div>
            <div className='grid grid-cols-2 tracking-wide'>
                <div className='text-sm grid gap-2' >
                    <div>
                        <strong >Native name:</strong><span>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}  </span>
                    </div>
                    <div>
                        <strong>Population:</strong> <span>
                             {country.population}
                        </span>
                    </div>
                    <div>
                        <strong>Region:</strong> <span>{country.region} </span>
                    </div>
                    <div>
                        <strong>Sub Region:</strong> <span>{country.subregion}</span>
                    </div>
                    <div>
                        <strong>Capital:</strong> <span>{country.capital}</span>
                    </div>
                </div>
                <div className=''>
                    <div className='mb-1'>
                        <strong>Top Level Domain:</strong> <span>{country.tld}</span>
                    </div>
                    <div className='mb-1'>
                        <strong>Currencies:</strong> <span>
                            {country.currencies[Object.keys(country.currencies)[0]].name}
                        </span>
                    </div>
                    <div>
                        <strong>Languages:</strong> <span>
                            {country.languages[Object.keys(country.languages)[0]]}
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex mt-12'>
                <div>
                    <strong>Border Countries:</strong>

                </div>
                <div className='flex gap-2 ml-3'>
                    <button className='px-2 shadow'> {buttonOne}</button>
                    <button className='px-2 shadow'> {buttonTwo}</button>
                </div>
            </div>
        </div>
    )
}

export default DetailsText