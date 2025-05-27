import React from "react";
import SideMenuBar from "../components/base/SideMenuBar";
import { Outlet } from "react-router";
import Navbar from "../components/base/Navbar";
import HeaderBar from "../components/base/HeaderBar";

const SecondaryLayout = () => {
  return (
    <React.Fragment>
      <HeaderBar />

      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <SideMenuBar />

        <div style={{ marginLeft: "230px", marginTop: "40px", width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecondaryLayout;
