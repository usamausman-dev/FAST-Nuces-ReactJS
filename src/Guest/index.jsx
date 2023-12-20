import React from 'react'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Home, Login, Signup } from './pages'

export default function Guest() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to={'/login'} replace="true" />} />
    </Routes>
  )
}
