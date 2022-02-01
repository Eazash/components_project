import React from 'react';
import NavBar from "../components/navbar/navbar";

import { Outlet } from 'react-router-dom';

const WithNav = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default WithNav;