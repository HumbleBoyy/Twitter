import { Link } from "react-router-dom"
import Logo from "../../assets/Logos/twitter.svg"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"

const Register = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className="flex flex-col gap-5">
        <img src={Logo} alt="TwitterLogo" width={"50"} height={"50"} className="block mx-auto"/>
        <h2 className="text-[42px] font-bold">Create an account</h2>
        <form className="flex flex-col gap-3">
          <Input type={"text"} placeholder={"Name"} extraClass={"!w-[670px]"}/>
          <Input type={"tel"} placeholder={"Phone number"} extraClass={"!w-[670px]"}/>
          <Link to={"#"} className="text-[18px] text-[#1DA1F2]">Use email</Link>
          <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-bold">Date of birth</h2>
          <p className="text-[16px] text-slate-500 w-[670px]">
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
             Quis bibendum ante phasellus metus, magna lacinia sed augue. 
             Odio enim nascetur leo mauris vel eget. Pretium id  ullamcorper blandit viverra dignissim eget tellus.
             Nibh mi massa in molestie a sit. Elit congue.</p>
          <Input type={"date"} placeholder={"Name"} extraClass={"!w-[670px]"}/>
          </div>
          <Button text={"Next"} extraClass={"!w-[670px]"}/>
        </form>
      </div>
    </div>
  )
}

export default Register