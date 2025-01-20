import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const Input = ({type, placeholder, extraClass,name, required, onChange}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
    {type === "password" ? 
     <label className="relative">
      <input onChange={onChange} required={required} type={showPassword ? "text" : type} placeholder={placeholder} name={name} className={`${extraClass} w-[450px] h-[60px] p-2 outline-none border-2 rounded-md focus:border-2 focus:border-[#1DA1F2]`}/>
      <div onClick={() => setShowPassword(!showPassword)} className="absolute top-4 my-auto right-5 cursor-pointer">
         {showPassword ? <FaEyeSlash size={"30px"}/> :
          <IoIosEye size={"30px"}/>}
      </div>
     </label>
    : <input onChange={onChange} required={required} type={type} placeholder={placeholder} name={name} className={`${extraClass} w-[450px] h-[60px] p-2 outline-none border-2 rounded-md focus:border-2 focus:border-[#1DA1F2]`}/> }
      
    </>
  )
}

export default Input
