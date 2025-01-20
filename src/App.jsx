import { lazy, Suspense, useContext } from "react"
import {Context} from "./Context/context"
import LazyFallback from "./Components/LazyFallback/LazyFallback.jsx"


const RegisterRoutes = lazy( ()=> new Promise((resolve)=> {
  return setTimeout(()=> resolve(import("./Pages/Registiration/index.jsx")), 3000)
}))

const DashboardPagesRoutes = lazy(()=> new Promise((resolve)=> {
  return setTimeout(()=> resolve(import("./Pages/Dashboard")), 3000)
}))

const App = () => {
  const {token} = useContext(Context)
  if(token){
   return <Suspense fallback={<LazyFallback/>}>
          <DashboardPagesRoutes/>
   </Suspense> 
  }else{
    return <Suspense fallback={<LazyFallback/>}>
       <RegisterRoutes/>
    </Suspense>
  }
}

export default App
