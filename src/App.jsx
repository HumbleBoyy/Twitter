import { useContext } from "react"
import {Context} from "./Context/context"
import DashboardPagesRoutes from "./Pages/Dashboard"
import RegisterRoutes from "./Pages/Registiration"

const App = () => {
  const {token} = useContext(Context)
  if(token){
    <DashboardPagesRoutes/>
  }else{
    <RegisterRoutes/>
  }
}

export default App
