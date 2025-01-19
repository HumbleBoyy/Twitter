import { GrGallery } from "react-icons/gr"
import defaultAvatar from "../../assets/Images/emptyAvatar.jpg"

import Input from "../../Components/Input/Input"
import { MdOutlineGifBox } from "react-icons/md"
import { FaRegSmileWink } from "react-icons/fa"
import { RiCalendarScheduleLine } from "react-icons/ri"
import Button from "../../Components/Button/Button"

const Home = () => {

  const handlePostSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
     <div className="w-full border-b-2 h-[150px] border-slate-400 p-5">
       <form onSubmit={handlePostSubmit}>
         <div className="flex  items-center gap-2">
         <img src={defaultAvatar} alt="userImage" width={50} height={50} />
         <Input name={"postContent"} required  placeholder={"Type Something to post"} extraClass={"!border-transparent !w-[80%]"}/>
         </div>
         <div className="flex items-center gap-5 m-5 relative">
          <label>
            <Input type={"file"} extraClass={"!hidden"}/>
            <GrGallery  className="text-blue-600 text-[20px] cursor-pointer"/>
          </label>
          <MdOutlineGifBox  className="text-blue-600 text-[25px]"/>
          <FaRegSmileWink  className="text-blue-600 text-[20px]"/>
          <RiCalendarScheduleLine  className="text-blue-600 text-[20px]"/>
          <Button type={"submit"} text={"Tweet"} extraClass={"!w-[150px] h-[45px] !absolute !right-0"}/>
       </div>
       </form>
      
     </div>
    </>
  )
}

export default Home
