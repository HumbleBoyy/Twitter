import React, { useState } from 'react'
import Reaction from '../Reactions/Reaction'
import { LuMessageSquare } from 'react-icons/lu'
import { BiRepost } from 'react-icons/bi'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import { IoIosStats } from 'react-icons/io'

const PostItem = ({item}) => {
    const [isLiked, setIsLiked] = useState(false)
  return (
    <>
       <li className="border-b-2 w-full border-slate-400 h-auto p-5">
               <div className="flex items-start gap-2 mb-5">
                <img src={item.avatarImage} alt="userImage" width={50} height={50}/>
                 <div className="flex flex-col  gap-1">
                   <div className='flex items-center gap-2'>
                      <h2 className="text-[20px] font-bold">{item.name}</h2>
                      <p className="text-[15px] text-slate-500">{item.userName}</p> 
                   </div>
                     <p className='text-[16px] w-[700px] overflow-wrap  break-words h-auto'>{item.postContent}</p>
                 </div>
              </div>
              {item.postPicture && <img src={item.postPicture} alt="Post image" width={"full"} className='rounded-[30px] mb-8' height={400} />}
              
              <div className='flex px-2 gap-10'>
                <Reaction extraClass={"!text-[20px]"} icon={<LuMessageSquare />} count={item.commentCount}/>
                <Reaction extraClass={"!text-[30px]"}  icon={<BiRepost />} count={item.rePost}/>
                <Reaction extraClass={`!text-[20px] ${isLiked && "!text-red-600"}`} onClick={()=> setIsLiked(!isLiked)} icon={ isLiked === true ? <FaHeart/> : <FaRegHeart />} count={ isLiked === true ? item.likeCount + 1 : item.likeCount}/>
                <Reaction extraClass={"!text-[20px]"} icon={<IoIosStats />} count={item.stats}/>
              </div>
           </li>
    </>
  )
}

export default PostItem
