import React from 'react'
import Input from '../Components/Input/Input'
import Trends from '../Components/Trends/Trends'
import Suggestion from '../Components/Suggestions/Suggestion'

const Sidebar = () => {
  return (
    <div  className='w-[22%] px-2 py-3  h-[100vh] overflow-y-auto flex flex-col'>
      <Input  type={'text'} placeholder={"Search twitter"} extraClass={"newClass !w-full !bg-slate-200 !px-7 !rounded-[50px] !text-slate-500 !h-[40px] "}/>
      <Trends/>
      <Suggestion/>
    </div>
  )
}

export default Sidebar
