import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ onRouteChange, isSignedin }) => {
  if (isSignedin) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p className="f3 link black underline pa3 pointer">Sign Out </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/signin">
          <p
            // onClick={() => onRouteChange("signin")}
            className="f3 link black underline pa3 pointer"
          >
            Sign In{" "}
          </p>
        </Link>
        <Link to="/reg">
          <p
            // onClick={() => onRouteChange("register")}
            className="f3 link black underline pa3 pointer"
          >
            Register{" "}
          </p>
        </Link>
      </nav>
    );
  }
};

export default Navigation;
