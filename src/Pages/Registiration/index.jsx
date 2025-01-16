import { Route, Routes } from 'react-router-dom'
import { registirationRoutes } from '../../hooks/useRoute'

const RegisterRoutes = () => {
  return (
    <Routes>
        {registirationRoutes.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default RegisterRoutes
