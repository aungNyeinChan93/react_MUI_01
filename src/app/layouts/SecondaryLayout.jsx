import React from "react";
import SideMenuBar from "../components/base/SideMenuBar";
import { Outlet } from "react-router";
import Navbar from "../components/base/Navbar";

const SecondaryLayout = () => {
  return (
    <React.Fragment>
      <div style={{ marginLeft: "230px" }}>{/* <Navbar /> */}</div>

      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <SideMenuBar />

        <div style={{ marginLeft: "230px" }}>
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecondaryLayout;
