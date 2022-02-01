import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Items from "../components/items/Items";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import WithNav from "./WithNav";
import WithoutNav from "./WithoutNav";

function AllRoutes() {
	return (
		<Routes>
			<Route element={<WithNav />}>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Items />} />
			</Route>
			<Route element={<WithoutNav />}>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Route>
		</Routes>
	);
}

export default AllRoutes;
