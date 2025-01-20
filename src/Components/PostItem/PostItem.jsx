import React from 'react'
import Reaction from '../Reactions/Reaction'
import { LuMessageSquare } from 'react-icons/lu'
import { BiRepost } from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa6'
import { IoIosStats } from 'react-icons/io'

const PostItem = ({item}) => {
  return (
    <>
       <li className="border-b-2 border-slate-400 h-auto w-full p-5">
               <div className="flex items-start gap-2 mb-5">
                <img src={item.avatarImage} alt="userImage" width={50} height={50}/>
                 <div className="flex flex-col gap-1">
                   <div className='flex items-center gap-2'>
                      <h2 className="text-[20px] font-bold">{item.name}</h2>
                      <p className="text-[15px] text-slate-500">{item.userName}</p> 
                   </div>
                    <p className='text-[16px]'>{item.postContent}</p>
                 </div>
              </div>
              {item.postPicture && <img src={item.postPicture} alt="Post image" width={"full"} className='rounded-[30px] mb-5' height={400} />}
              
              <div className='flex px-3 gap-10'>
                <Reaction icon={<LuMessageSquare />} count={item.commentCount}/>
                <Reaction icon={<BiRepost />} count={item.rePost}/>
                <Reaction icon={<FaHeart />} count={item.likeCount}/>
                <Reaction icon={<IoIosStats />} count={item.stats}/>
              </div>
           </li>
    </>
  )
}

export default PostItem
