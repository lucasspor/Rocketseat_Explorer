import { Route , Routes} from "react-router-dom"

import { Home } from '../pages/Home'
import { Details } from "../pages/Details"
import { New } from "../pages/New"
import { Profile } from "../pages/Profile"

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/new"  element={<New/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      <Route path="/details/:id"  element={<Details/>}/>
    </Routes>
  )
}