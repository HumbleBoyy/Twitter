import React from 'react'
import Navbar from '../Modules/Navbar'
import Sidebar from '../Modules/Sidebar'
import Header from '../Modules/Header'

const DashboardLayout = ({children}) => {
  return (
    <div className='px-10 flex'>
      <Navbar/>
          <div className='w-[56%] h-[100vh] overflow-y-auto border-r-2 border-slate-400'>
           <Header/>
           {children}
          </div>
            <Sidebar/>
          
    </div>
  )
}

export default DashboardLayout
