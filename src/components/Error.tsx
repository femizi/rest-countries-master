import React from 'react'

const Error = ({query}) => {
  return (
    <div className='grid place-content-center p-8 text-2xl text-center w-full'>Error{query.error.message}</div>
  )
}

export default Error