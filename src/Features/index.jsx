import React from 'react'
import Navbar from '../Modules/Navbar'
import Sidebar from '../Modules/Sidebar'

const DashboardLayout = ({children}) => {
  return (
    <div className='px-10 flex'>
      <Navbar/>
          <div className='w-[60%]'>
           {children}
          </div>
      <Sidebar/>
    </div>
  )
}

export default DashboardLayout
