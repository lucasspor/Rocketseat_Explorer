import { Route , Routes, Navigate} from "react-router-dom"


import { Signing } from "../pages/Signing"
import { Signup } from "../pages/Signup"

export function AuthRoutes(){
  const user = localStorage.getItem("@rocketnote:user")

  return(
    <Routes>
      <Route path="/"  element={<Signup/>}/>
      <Route path="/register"  element={<Signing/>}/>

      {!user && <Route path="*"  element={<Navigate to="/"/>}/>}
    </Routes>
  )
}