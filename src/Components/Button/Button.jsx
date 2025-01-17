const Button = ({text,onClick,extraClass, type, isLoading, loadingImage}) => {
  return (
    <button type={type} onClick={onClick} className={`${extraClass} w-[450px] h-[50px] bg-[#1DA1F2] hover:bg-[#1da0f2dc] text-white rounded-[50px] font-semibold text-[20px]`}>
      {isLoading ? <img src={loadingImage}  alt="Loading" width={30} height={30} className="mx-auto scale-[1.5]"/> : text}
    </button>
  )
}

export default Button
