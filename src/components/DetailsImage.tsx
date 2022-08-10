import React from 'react'

const DetailsImage = ({png}) => {
    return (
        <div>
            <img className='shadow w-full' src={png} />
        </div>
    )
}

export default DetailsImage