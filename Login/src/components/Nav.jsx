import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav>
        <ul className="inline-flex">
          <li className="ml-9">
            <Link className="ml-9" to="/login">
              Login
            </Link>
          </li>
          <li className="ml-9">
            <Link className="ml-9" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
