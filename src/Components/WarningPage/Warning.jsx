import Cube from "../../assets/Images/Cube.png"
const WarningPage = () => {
  return (
    <>
     <div className="bg-slate-800 w-ful flex justify-center items-center h-full overflow-y-auto text-white">
       <div className="flex flex-col justify-center items-start">
       <h2 className="text-[30px] font-bold"><span className="text-red-600">!</span>This page is under development</h2>
          <img src={Cube} alt="Cube" className="mx-auto"/>
       </div>
     </div>
    </>
    
  )
}

export default WarningPage
