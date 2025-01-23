import React from 'react'
import Input from '../Components/Input/Input'
import Trends from '../Components/Trends/Trends'
import Suggestion from '../Components/Suggestions/Suggestion'
import { useLocation } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import getUserInfo from '../hooks/getUserInfo'

const Sidebar = () => {
  const path = useLocation()
  const {postList} = getUserInfo()
  return (
    <div  className='w-[22%] px-2 py-3  h-[100vh]  overflow-y-auto flex flex-col'>
      <Input  type={'text'} placeholder={"Search twitter"} extraClass={"newClass !w-full !bg-slate-200 !px-7 !rounded-[50px] !text-slate-500 !h-[40px] "}/>
      {path.pathname !== PATH.profile ?
      <>
       <Trends/>
       <Suggestion/>
      </>
      :
        <>
        <div className='flex flex-wrap  w-full gap-[1px] h-auto mt-2  rounded-[20px]'>
          {postList.map(item => (
            <>
               {item.postPicture !== null ? <img src={item.postPicture} className='object-cover hover:scale-50 cursor-pointer duration-500 w-[100px]' key={item.id} width={123} height={88}/> :""}
            </>
          ))}
        </div>
          <Suggestion/>
          <Trends/>
        </>
      }
    </div>
  )
}

export default Sidebar
