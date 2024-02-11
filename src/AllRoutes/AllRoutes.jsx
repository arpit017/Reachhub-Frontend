import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom"
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Home } from '../Pages/Home'
import { History } from '../Pages/History'
import { UseSelector, useSelector } from 'react-redux'
export const AllRoutes = () => {

  const login=useSelector((data)=>{
    return data.login
  })
  return (
    <div>
<Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={ login?<Home/>:<Navigate to="/"/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="*" element={<Home/>}/>
</Routes>

    </div>
  )
}
