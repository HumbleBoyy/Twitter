import React from 'react'

const Reaction = ({icon, count, extraClass, onClick}) => {
  return (
    <div className={`flex items-center gap-1 ${extraClass}`}>
      <button onClick={onClick}>{icon}</button>
      <span>{count !== 0 ? count : ""}</span>
    </div>
  )
}

export default Reaction
