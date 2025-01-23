import React from 'react'
import { Link } from 'react-router-dom'
import getUserInfo from '../hooks/getUserInfo'
import { FaLinkSlash, FaLocationDot } from "react-icons/fa6"
import { PiGlobeStandLight } from "react-icons/pi"
import { FaRegCalendarAlt } from "react-icons/fa"

const UserBio = () => {
    const {username,email} = getUserInfo()
    const userBio = [
        {
          icon:<FaLocationDot />,
          title:"Uzbekistan",
          isLink:false
        },
        {
          icon:<FaLinkSlash />,
          title:"t.me/asadullohs1",
          isLink:true
        },
        {
          icon:<PiGlobeStandLight />,
          title:"Born July 18 2003"
        },
        {
          icon:<FaRegCalendarAlt />,
          title:"Joined July 18 2021"
        },
      ]
  return (
    <div className="px-[20px] flex flex-col">
    <strong className="text-[24px] font-bold">{username}</strong>
    <Link to={"#"} className="text-[16px] text-slate-400 cursor-pointer mb-5">{email ? `@${email}` : ""}</Link>
    <h2 className="text-[18px]">Frontend developer at <Link to={"#"} className="text-blue-500">@Asadullohs</Link></h2>
    <div className="flex gap-10 items-center mt-5">
      {userBio.map(item => (
        <>
          {item.isLink ? 
           <Link to={`http://${item.title}`} target="_blank" className="flex items-center gap-1 text-[18px] text-blue-500">{item.icon} {item.title}</Link>
           : 
           <p className="flex items-center gap-1 text-[18px] text-slate-500">{item.icon} {item.title}</p>
          }
          
        </>
      ))}
    </div>
    <div className="flex items-center gap-2 mt-3">
        <p className="text-[18px] font-light"><span className="font-semibold">15</span> Following</p>
        <p className="text-[18px] font-light"><span className="font-semibold">5,000</span> Following</p>
    </div>
</div>
  )
}

export default UserBio
