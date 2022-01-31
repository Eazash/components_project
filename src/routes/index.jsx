import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Items from '../components/items/Items'

function AllRoutes() {
  return (
	<Routes>
	<Route path="/" element={<Home />} />
	<Route path='/products' element={<Items />} />
  </Routes>
  );
}

export default AllRoutes;
