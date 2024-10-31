import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { NewMovie } from "../pages/NewMovie"

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<NewMovie/>}/>
    </Routes>
  )
}