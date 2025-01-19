import React from 'react'
import { navbarList } from '../hooks/useRoute'
import { useLocation } from 'react-router-dom'
import { BsStars } from 'react-icons/bs'


const Header = () => {
    const path = useLocation()
  return (
    <header className='flex justify-between items-center p-5 border-b-2 border-slate-400'>
      <h2 className='font-bold text-[25px]'>{navbarList.map(item => item.path === path.pathname && item.title)}</h2>
      <BsStars size={"25px"}/>
    </header>
  )
}

export default Header
