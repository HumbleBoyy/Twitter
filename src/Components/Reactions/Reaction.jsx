import React from 'react'

const Reaction = ({icon, count,extraClass}) => {
  return (
    <div className={`flex items-center gap-2 text-[17px] ${extraClass}`}>
      {icon}
      <span>{count !== 0 ? count : ""}</span>
    </div>
  )
}

export default Reaction
