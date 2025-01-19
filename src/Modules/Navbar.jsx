import { NavLink } from "react-router-dom"
import Logo from "../assets/Logos/twitter.svg"
import { navbarList } from "../hooks/useRoute"
import { useState } from "react"
import Button from "../Components/Button/Button"

const Navbar = () => {
    const [activeIcon, setActiveIcon] = useState("Home")


  return (
    <div className='w-[20%] h-[100vh] border-r-2 border-slate-400 overflow-y-auto pt-[35px]'>
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
    </div>
  )
}

export default Navbar
