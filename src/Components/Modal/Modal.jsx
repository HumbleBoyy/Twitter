import { GrClose } from 'react-icons/gr'

const Modal = ({children, openModal, setOpenModal}) => {
  return (
    <div id='wrapper' onClick={(e)=> e.target.id === "wrapper" && setOpenModal(false)} className={`fixed inset-0 bg-[#00000079] duration-300 ${openModal ? "scale-1" : "scale-0"} flex items-center justify-center backdrop-blur-sm z-50`}>
      <div className='absolute w-[500px] h-[300px] bg-white p-5 rounded-md'>
        <button onClick={()=> setOpenModal(false)} className='absolute top-3 right-3'><GrClose size={"25px"}/></button>
        {children}
      </div>
    </div>
  )
}

export default Modal
