import { Link } from "react-router-dom"
import Logo from "../../assets/Logos/twitter.svg"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className="flex flex-col gap-10">
        <img src={Logo} alt="TwitterLogo" width={"50"} height={"50"}/>
        <h2 className="text-[42px] font-bold">Log in to Twitter</h2>
        <form className="flex flex-col gap-5">
          <Input type={"text"} placeholder={"Phone number, email address"}/>
          <Input type={"text"} placeholder={"Password"}/>
          <Button text={"Login"}/>
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
