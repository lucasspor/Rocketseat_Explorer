import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { Profile } from "../pages/Profile"
import { NewMovie } from "../pages/NewMovie"

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/new" element={<NewMovie/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}