import Logo from "../../assets/Logos/twitter.svg"

const LazyFallback = () => {
  return (
    <div className='fixed inset-0  justify-center top-56 items-center w-full z-50'>
       <img className="logo_animated mx-auto" src={Logo} alt="Logo" width={300} height={300}/>
    </div>
  )
}

export default LazyFallback
