import { Link } from "react-router-dom"
import Logo from "../../assets/Logos/twitter.svg"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Spinner from "../../assets/Images/spinner.png"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "../../Context/context"
import toast, { Toaster } from "react-hot-toast"

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {users, setToken} = useContext(Context)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      phoneNumberOrNumber: e.target.email.value,
      password:e.target.password.value
    }

    if(users.length > 0){
       const findUser = users.some(item =>( item.email === data.phoneNumberOrNumber || item.phone === data.phoneNumberOrNumber) && item.password === data.password)
       const userData = users.find(item =>( item.email === data.phoneNumberOrNumber || item.phone === data.phoneNumberOrNumber) && item.password === data.password)
       if(findUser){
        setTimeout(()=> {
          toast.success(`Welcome To Your Account`)
        },500)
        setTimeout(()=> {
          setIsLoading(false)
          setToken(data)
          localStorage.setItem("user_info", JSON.stringify(userData))
        },1000)
       }
    }else{
        setTimeout(() => {
          toast.error("User is not defined")
          setIsLoading(false)
        }, 1000)
    }
    
  }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
      <div className="flex flex-col gap-10">
        <img src={Logo} alt="TwitterLogo" width={"50"} height={"50"}/>
        <h2 className="text-[42px] font-bold">Log in to Twitter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input required name={"email"} type={"text"} placeholder={"Phone number, email address"}/>
          <Input required name={"password"} type={"password"} placeholder={"Password"}/>
          <Button isLoading={isLoading} loadingImage={Spinner} type={"submit"} text={"Login"}/>
        </form>
        <div className="flex justify-between items-center">
          <Link to={"#"} className="text-[18px] text-[#1DA1F2]">Forgot password?</Link>
          <Link to={"/register"} className="text-[18px] text-[#1DA1F2]">Sign up to Twitter</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
