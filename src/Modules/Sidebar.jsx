import React from 'react'
import Input from '../Components/Input/Input'
import Trends from '../Components/Trends/Trends'
import Suggestion from '../Components/Suggestions/Suggestion'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const path = useLocation()
  return (
    <div  className='w-[22%] px-2 py-3  h-[100vh] overflow-y-auto flex flex-col'>
      <Input  type={'text'} placeholder={"Search twitter"} extraClass={"newClass !w-full !bg-slate-200 !px-7 !rounded-[50px] !text-slate-500 !h-[40px] "}/>
      {path.pathname !== "/profile" ?
      <>
       <Trends/>
       <Suggestion/>
      </>
      :
        <>
          <Suggestion/>
          <Trends/>
        </>
      }
    </div>
  )
}

export default Sidebar
