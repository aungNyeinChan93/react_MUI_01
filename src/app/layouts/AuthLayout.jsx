import React from "react";
import { Outlet } from "react-router";
import AuthNavbar from "../components/base/AuthNavbar";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <AuthNavbar />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default AuthLayout;
