import { Route, Routes } from "react-router-dom"

import { SignIng } from "../pages/SignIng"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIng />} />
    </Routes>
  )
}