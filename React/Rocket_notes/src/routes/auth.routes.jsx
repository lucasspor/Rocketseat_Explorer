import { Route , Routes} from "react-router-dom"


import { Signing } from "../pages/Signing"
import { Signup } from "../pages/Signup"

export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/"  element={<Signing/>}/>
      <Route path="/register"  element={<Signup/>}/>
    </Routes>
  )
}