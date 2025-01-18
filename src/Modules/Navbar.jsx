import { NavLink } from "react-router-dom"
import Logo from "../assets/Logos/twitter.svg"
import { navbarList } from "../hooks/useRoute"
import { useState } from "react"

const Navbar = () => {
    const [activeIcon, setActiveIcon] = useState("Home")


  return (
    <div className='w-[20%] h-[100vh] overflow-y-auto mt-[31px]'>
      <img src={Logo} alt="Logo"  width={40} height={40}/>

      <nav className="mt-10">
        {navbarList.map(item => (
            <NavLink onClick={(e) => setActiveIcon(e.target.textContent)} to={item.path} key={item.id} className={"flex items-center gap-2 p-4"}>
                {activeIcon === item.title ? item.activeIcon : item.icon}
                <span>{item.title}</span>
            </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
