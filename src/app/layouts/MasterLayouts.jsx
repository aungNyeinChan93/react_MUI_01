import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/product/base/Navbar";

const MasterLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default MasterLayout;
