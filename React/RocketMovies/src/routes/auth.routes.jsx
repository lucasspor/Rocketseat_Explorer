import { Route, Routes } from "react-router-dom"

import { SignIng } from "../pages/SignIng"
import { SignUp } from "../pages/SignUp"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/register" element={<SignIng />} />
    </Routes>
  )
}