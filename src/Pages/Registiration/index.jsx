import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Login, Register} from './index'

const RegisterRoutes = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
    </Routes>
  )
}

export default RegisterRoutes
