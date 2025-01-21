import { useLocation } from "react-router-dom"
import Cube from "../../assets/Images/Cube.png"
import { navbarList } from "../../hooks/useRoute"
const WarningPage = () => {
  const path = useLocation()
  return (
    <>
     <div className="bg-slate-900 w-ful flex justify-center items-center h-full overflow-y-auto text-white">
       <div className="flex flex-col justify-center items-start">
       <h2 className="text-[30px] font-bold"><span className="text-red-600 font-extrabold">!</span>{navbarList.map(item => item.path === path.pathname && item.title)} page is under development...</h2>
          <img src={Cube} alt="Cube" className="mx-auto"/>
       </div>
     </div>
    </>
    
  )
}

export default WarningPage
