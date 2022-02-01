import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Items from "../components/items/Items";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Items />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
		</Routes>
	);
}

export default AllRoutes;
