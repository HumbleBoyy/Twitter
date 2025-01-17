import React from 'react'

const Input = ({type, placeholder, extraClass,name, required}) => {
  return (
    <>
      <input required={required} type={type} placeholder={placeholder} name={name} className={`${extraClass} w-[450px] h-[60px] p-2 outline-none border-2 rounded-md focus:border-2 focus:border-[#1DA1F2]`}/>
    </>
  )
}

export default Input
