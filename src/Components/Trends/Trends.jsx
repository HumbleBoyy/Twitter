import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { trendsList } from '../../hooks/useRoute'
import { Link } from 'react-router-dom'

const Trends = () => {
  return (
    <div className='w-full p-2 mt-3 bg-slate-100'>
         <h2 className='flex items-center font-bold justify-between mb-2 text-[24px]'>Trends for you <IoSettingsOutline className='cursor-pointer'/>   </h2> 
         <ul className='w-full h-[40vh] overflow-y-auto flex flex-col gap-1'>
              {trendsList.map(item => (
                <li className='flex flex-col h-auto p-2 bg-slate-200' key={item.id}>
                  <div className='flex justify-between items-center'>
                    <p className='text-[16px] text-slate-400'>{item.mainTitle}</p>
                    <button className='text-[20px]'>{item.moreIcon}</button>
                  </div>
                  <h2 className='font-semibold text-[20px]'>{item.secondaryTitle}</h2>
                  <p className='text-[16px] text-slate-400'>{item.tweetCount}k</p>
                </li>  
              ))}
        </ul>    
        <Link to={"#"} className='text-[20px] text-blue-500 py-5 hover:text-blue-400'>Show more</Link>  
    </div>
  )
}

export default Trends
