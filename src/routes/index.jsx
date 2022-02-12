import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Checkout from "../components/checkout";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { isAdmin, isLoggedIn } from "../store/authSlice";
import Products from "../pages/products/Products";
import Users from "../pages/users";

function AllRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <RequireAuth redirectTo="/login">
              <Products />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth redirectTo="/login">
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <SkipAuth>
              <Login />
            </SkipAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <SkipAuth>
              <Signup />
            </SkipAuth>
          }
        />
        <Route
          path="/users"
          element={
            <AdminOnly>
              <Users />
            </AdminOnly>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = useSelector(isLoggedIn);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function SkipAuth({ children }) {
  let isAuthenticated = useSelector(isLoggedIn);
  return isAuthenticated ? <Navigate to="/" /> : children;
}

function AdminOnly({ children }) {
  let admin = useSelector(isAdmin);
  return admin ? children : <Navigate to="/" />;
}
export default AllRoutes;
