import React from 'react'

const Input = ({type, placeholder, extraClass}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className={`${extraClass} w-[450px] h-[60px] p-2 outline-none border-2 rounded-md focus:border-2 focus:border-[#1DA1F2]`}/>
    </>
  )
}

export default Input
