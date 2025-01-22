import { navbarList } from '../hooks/useRoute'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsStars } from 'react-icons/bs'
import getUserInfo from '../hooks/getUserInfo'
import { BiArrowBack } from 'react-icons/bi'


const Header = () => {
    const path = useLocation()
    const {username, postList} = getUserInfo()
    const navigate =  useNavigate()
  return (
   <>
     {path.pathname !== "/profile" ?
      <header className='flex justify-between items-center p-5 border-b-2 border-slate-400'>
      <h2 className='font-bold text-[25px]'>{navbarList.map(item => item.path === path.pathname && item.title)}</h2>
      <BsStars size={"25px"}/>
    </header>
     :
     <header className='flex items-center gap-5 px-5 py-2 border-b-2 border-slate-400'>
      <BiArrowBack onClick={()=> navigate(-1)} className='cursor-pointer' size={"25px"}/>
      <div className='flex flex-col'>
        <h2 className='font-bold text-[25px]'>{username}</h2>
        <p className='text-[16px] text-slate-500'>{postList.length} Tweets</p>
      </div>
    </header>
     
     }
   </>
  )
}

export default Header
