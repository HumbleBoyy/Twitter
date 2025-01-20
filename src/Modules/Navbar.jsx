import { NavLink } from "react-router-dom"
import Logo from "../assets/Logos/twitter.svg"
import { navbarList } from "../hooks/useRoute"
import { useContext, useState } from "react"
import Button from "../Components/Button/Button"
import defaultAvatar from "../assets/Images/emptyAvatar.jpg"
import { BsThreeDots } from "react-icons/bs"
import Modal from "../Components/Modal/Modal"
import Spinner from "../assets/Images/spinner.png"
import { Context } from "../Context/context"
const Navbar = () => {
  const userInfo = JSON.parse(localStorage.getItem("user_info") || {})
    const [isLoading, setIsLoading] = useState(false)
    const [activeIcon, setActiveIcon] = useState("Home")
    const [logoutModalOpen, setLogoutModalOpen] = useState(false)
    const {setToken} = useContext(Context)
    const handleLogout = () => {
       setIsLoading(true)
       setTimeout(()=> {
        setIsLoading(false)
        setToken(null)
       },1000)
    }

  return (
    <div className='w-[22%] h-[100vh] border-r-2 border-slate-400 overflow-y-auto pt-[35px]'>
      <img src={Logo} alt="Logo"  width={40} height={40}/>
      <nav className="mt-10">
        {navbarList.map(item => (
            <NavLink onClick={(e) => setActiveIcon(e.target.textContent)} to={item.path} key={item.id} className={"flex items-center gap-2 p-4"}>
                {activeIcon === item.title ? item.activeIcon : item.icon}
                <span>{item.title}</span>
            </NavLink>
        ))}
      </nav>
      <Button text={"Tweet"} extraClass={"!w-[250px]"}/>

      <div onClick={()=> setLogoutModalOpen(true)} className="flex  cursor-pointer w-[250px] mt-5 gap-2">
          <img src={defaultAvatar} alt="userImage" width={50} height={50} />
          <div className="flex flex-col w-full">
              <h2 className="text-[20px] font-semibold">{userInfo.username}</h2>
              <p className="text-[15px] text-slate-500">{userInfo.email ? `@${userInfo.email}` : ""}</p>
          </div>
          <BsThreeDots size={"35px"}/>
      </div>
      <Modal openModal={logoutModalOpen} setOpenModal={setLogoutModalOpen}>
         <div className="flex flex-col gap-3 mt-20">
         <h2 className="text-[25px] font-semibold flex justify-center">Do you want to log out?</h2>
         <div className="flex justify-center items-end gap-2">
            <Button onClick={()=> setLogoutModalOpen(false)} text={"Cancel"} extraClass={"!w-[200px]"}/>
            <Button loadingImage={Spinner} isLoading={isLoading} onClick={handleLogout} text={"Log Out"} extraClass={"!w-[200px] !bg-red-600"}/>
         </div>
         </div>
      </Modal>
    </div>
  )
}

export default Navbar
