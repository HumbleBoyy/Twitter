import DashboardLayout from '../../Features'
import { dashboardRouteList } from '../../hooks/useRoute'
import { Route, Routes } from 'react-router-dom'

const DashboardPagesRoutes = () => {

  return (
    <DashboardLayout>
      <Routes>
        {dashboardRouteList.map(item =>
          item.children.length > 0 ?
          <Route key={item.id} path={item.path} element={item.element}>
            {item.children.map(item2 => <Route key={item2.id} path={item2.path} element={item2.element} />)}
          </Route>
          :
          <Route key={item.id} path={item.path} element={item.element} />
        )}
      </Routes>
   </DashboardLayout>
  )
}

export default DashboardPagesRoutes
