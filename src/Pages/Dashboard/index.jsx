import DashboardLayout from '../../Features'
import { dashboardRouteList } from '../../hooks/useRoute'
import { Route, Routes } from 'react-router-dom'

const DashboardPagesRoutes = () => {

  return (
    <DashboardLayout>
      <Routes>
        {dashboardRouteList.map(item =><Route key={item.id} path={item.path} element={item.element} />)}
      </Routes>
   </DashboardLayout>
  )
}

export default DashboardPagesRoutes
