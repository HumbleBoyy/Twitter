import { useState } from "react"
import imageD from "../../assets/Images/bg.jpg"
import avatarI from "../../assets/Images/emptyAvatar.jpg"
import Button from "../../Components/Button/Button"
import Modal from "../../Components/Modal/Modal"
import getUserInfo from "../../hooks/getUserInfo"
import UserBio from "../../Modules/UserBio"
import { PATH } from "../../hooks/usePath"
import { NavLink, Outlet } from "react-router-dom"

const Profile = () => {
  const [openModal, setOpenModal] = useState(false)
  const {username,email, postList} = getUserInfo()
 
  const nestedList = [
    {
      id:1,
      path:PATH.profile,
      title:"Tweets"
    },
    {
      id:2,
      path:PATH.profileTweetsReplies,
      title:"Tweets & replies"
    },
    {
      id:3,
      path:PATH.profileMedia,
      title:"Media"
    },
    {
      id:4,
      path:PATH.profileLikes,
      title:"Likes"
    },
  ]
 
  return (
    <>
      <div className="relative">
         <img src={imageD} className="h-[250px] object-cover" alt="Default BG" width={"100%"} height={200}/>
         <div className="flex  justify-end items-center">
            <img src={avatarI} className="absolute top-40 left-5 rounded-[50%]" alt="User Image" width={150} height={150}/>
            <Button extraClass={"!w-[150px] !bg-slate-100 !text-black !border-2 !border-black !m-5"} onClick={()=>setOpenModal(true)} text={"Edit Profile"}/>
         </div>
      </div>
      <UserBio/>
      
      <div className="px-[25px] mt-[40px] border-b-2 border-slate-400 flex justify-between items-center nested_link_wrapper">
        {nestedList.map(item => <NavLink key={item.id} to={item.path} className={"text-[18px] pb-[19px] relative"}>{item.title}</NavLink>)}
      </div>
      <Outlet/>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>

      </Modal>
    </>
  )
}

export default Profile
