import { useContext } from "react"
import {Context} from "./Context/context"
import DashboardPagesRoutes from "./Pages/Dashboard"
import RegisterRoutes from "./Pages/Registiration/index.jsx"

const App = () => {
  const {token} = useContext(Context)
  if(token){
   return <DashboardPagesRoutes/>
  }else{
    return <RegisterRoutes/>
  }

  
}

export default App
