import React from "react";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";

import { Outlet } from "react-router-dom";

//displays all the components that are needed
const ShowNavAndFooter = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

const HideNavAndFooter = () => <Outlet />;

export {ShowNavAndFooter, HideNavAndFooter};

