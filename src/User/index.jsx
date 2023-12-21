import React from 'react'
import { Home, Products, Blogs } from './pages'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

export default function User() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<Navigate to={'/login'} replace="true" />} />
    </Routes>
  )
}
