import React from 'react'
import Input from '../Components/Input/Input'
import Trends from '../Components/Trends/Trends'

const Sidebar = () => {
  return (
    <div  className='w-[20%] px-1 py-3 flex flex-col'>
      <Input  type={'text'} placeholder={"Search twitter"} extraClass={"newClass !w-[320px] !bg-slate-200 !px-7 !rounded-[50px] !text-slate-500 !h-[40px] "}/>
      <Trends/>
    </div>
  )
}

export default Sidebar
