import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router";

const AuthNavbar = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg" disableGutters>
        <header className="bg-white">
          <div className="flex flex-1 items-center justify-center mt-4">
            <div className="flex items-center gap-4">
              <Link
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                to="/auth/login"
              >
                Login
              </Link>

              <Link
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                to="/auth/register"
              >
                Register
              </Link>

              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </Container>
    </React.Fragment>
  );
};

export default AuthNavbar;
