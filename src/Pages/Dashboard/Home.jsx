import { GrGallery } from "react-icons/gr"
import defaultAvatar from "../../assets/Images/emptyAvatar.jpg"
import Input from "../../Components/Input/Input"
import { MdOutlineGifBox } from "react-icons/md"
import { FaRegSmileWink } from "react-icons/fa"
import { RiCalendarScheduleLine } from "react-icons/ri"
import Button from "../../Components/Button/Button"
import Spinner from "../../assets/Images/spinner.png"
import { useState } from "react"
import PostItem from "../../Components/PostItem/PostItem"
import toast, { Toaster } from "react-hot-toast"

const Home = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [postImage, setPostImage] = useState(null)
   const userInfo = JSON.parse(localStorage.getItem("user_info"))

   const [postList, setPostList] = useState(JSON.parse(localStorage.getItem("post_list")) || [])
  
   const handlePostSubmit = (e) => {
     e.preventDefault()
     if (!e.target.postContent.value.trim() && !postImage) {
      toast.error("Please provide text or an image to post.");
      return;
    }
     const data = {
          id:postList.length ? postList[postList.length - 1].id + 1 : 1,
          avatarImage:defaultAvatar,
          name:userInfo.username,
          userName:userInfo.email ? userInfo.email : "",
          postContent:e.target.postContent.value,
          commentCount:0,
          rePost:0,
          isLiked:false,
          likeCount:0,
          forwardCount:0,
          stats:0,
          postPicture:postImage
     }

     setIsLoading(true)

     setTimeout(()=> {
      setIsLoading(false)
      setPostImage(null)
      e.target.reset()
      setPostList([data, ...postList])
     },1000)
  }

  localStorage.setItem("post_list", JSON.stringify(postList))
  return (
    <>
     <Toaster
          position="top-center"
          reverseOrder={false}
        />
     <div className="w-full border-b-2 border-slate-400 p-2">
       <form autoComplete="off"  onSubmit={handlePostSubmit}>
         <div className="flex  items-center gap-2">
         <img src={defaultAvatar} alt="userImage" width={50} height={50} />
         <textarea rows={3} name={"postContent"}  className="outline-none  border-2 border-transparent focus:border-2 focus:border-blue-600 rounded-md w-full resize-none p-2"  placeholder={"Type Something to post"}/>
         </div>
         <div className="flex items-center gap-5 m-5 relative">
          <label>
            <Input onChange={(e) => setPostImage(URL.createObjectURL(e.target.files[0]))} type={"file"} extraClass={"!hidden"}/>
            <GrGallery  className="text-blue-600 text-[20px] cursor-pointer"/>
          </label>
          <MdOutlineGifBox  className="text-blue-600 text-[25px]"/>
          <FaRegSmileWink  className="text-blue-600 text-[20px]"/>
          <RiCalendarScheduleLine  className="text-blue-600 text-[20px]"/>
          <Button isLoading={isLoading} loadingImage={Spinner} type={"submit"} text={"Tweet"} extraClass={"!w-[150px] h-[45px] !absolute !right-0"}/>
       </div>
       </form>
     </div>
     <ul>
        {postList.map(item => <PostItem key={item.id} item={item}/>)}
      </ul>
    </>
  )
}

export default Home
