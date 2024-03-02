import React from 'react'

const Dummy = () => {
  return (
    <>
    <style jsx global>
    {`
        .dummy{
            color:red
        }
    `}
    </style>
    <div className='dummy'>
      hi dummy
    </div>
    </>
  )
}

export default Dummy