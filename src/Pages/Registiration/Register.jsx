import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/Logos/twitter.svg"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Spinner from "../../assets/Images/spinner.png"
import { useContext, useState } from "react"
import { Context } from "../../Context/context"
import toast, { Toaster } from "react-hot-toast"

const Register = () => {
  const {users, setUsers} = useContext(Context)
  const navigate = useNavigate()
  const [openEmail, setOpenEmail] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      username: e.target.username.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      email: openEmail ? e.target.email.value : null
    }

    console.log(data)
    setUsers([...users, data])

    setTimeout(() => {
      toast.success("Account Created Successfully")
    },500)


    setTimeout(() => {
      e.target.reset()
      setIsLoading(false)
      navigate(-1)
    }, 2000)
  }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
         <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <div className="flex flex-col gap-5">
        <img src={Logo} alt="TwitterLogo" width={"50"} height={"50"} className="block mx-auto"/>
        <h2 className="text-[42px] font-bold">Create an account</h2>
        <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-3">
          <Input required name={"username"} type={"text"} placeholder={"Name"} extraClass={"!w-[670px]"}/>
          <Input required name={"phone"} type={"tel"} placeholder={"Phone number"} extraClass={"!w-[670px]"}/>
          <Input required name={"password"} type={"password"} placeholder={"Password"} extraClass={"!w-[670px]"}/>
          {openEmail && <Input required name={"email"} type={"email"} placeholder={"Email"} extraClass={"!w-[670px]"}/>}
          <div className="flex justify-between items-center">
          <Link to={"#"} onClick={()=> setOpenEmail(!openEmail)} className="text-[18px] text-[#1DA1F2]">{openEmail ? "Hide email" : "Use email"}</Link>
          <Link to={"/"} className="text-[18px] text-[#1DA1F2]">Log In</Link>
          </div>
         {/* {openEmail === true ? "" :  <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-bold">Date of birth</h2>
          <p className="text-[16px] text-slate-500 w-[670px]">
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
             Quis bibendum ante phasellus metus, magna lacinia sed augue. 
             Odio enim nascetur leo mauris vel eget. Pretium id  ullamcorper blandit viverra dignissim eget tellus.
             Nibh mi massa in molestie a sit. Elit congue.</p>
          <Input type={"date"} disabled placeholder={"Name"} extraClass={"!w-[670px]"}/>
          </div>} */}
          <Button isLoading={isLoading} loadingImage={Spinner} text={"Sign Up"} type={"submit"} extraClass={"!w-[670px]"}/>
        </form>
      </div>
    </div>
  )
}

export default Register