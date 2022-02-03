import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Items from "../components/items/Items";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import { ShowNavAndFooter, HideNavAndFooter } from "./HideRoutes";
import Checkout from "../components/checkout";

function AllRoutes() {
  return (
    <Routes>
      <Route element={<ShowNavAndFooter />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Items />} />
      </Route>
      <Route element={<HideNavAndFooter />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes;
