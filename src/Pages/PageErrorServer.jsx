import React from 'react'

export const PageNot = () => {
  document.title = "Server Error"
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='font-[poppins]  text-[20px] md:text-[70px]'>Server Error Maintanance | 503</h1>
      </div>
  )
}
