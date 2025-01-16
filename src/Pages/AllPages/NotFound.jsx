import Logo from "../../assets/Logos/twitter.svg"
const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] bg-slate-900'>
      <h1 className='text-white text-[2.5rem] font-bold'><span className='text-red-700'>!</span>404 Not Found</h1>
       <img src={Logo} alt="" width={"50"}/>
    </div>
  )
}

export default NotFound
