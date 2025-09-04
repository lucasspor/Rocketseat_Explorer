import { Route, Routes } from "react-router-dom"


import { SignUp } from "../pages/SignUp"
import { SignIng } from "../pages/Signing"

export function AuthRoutes() {
  const user = localStorage.getItem("")

  return (
    <Routes>
      <Route path="/" element={<SignIng/>} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}