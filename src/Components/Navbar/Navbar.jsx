import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="homeSidebar">
        <div className="sidebarContent">
          <Link
            to="/"
            style={{ color: location.pathname === "/" && "#1976d2" }}
          >
            About
          </Link>
          <Link
            to="/skills"
            style={{ color: location.pathname === "/skills" && "#1976d2" }}
          >
            Skills
          </Link>
          <Link
            to="/work"
            style={{ color: location.pathname === "/work" && "#1976d2" }}
          >
            Work
          </Link>
          <Link
            to="/contact"
            style={{ color: location.pathname === "/contact" && "#1976d2" }}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="bottomNavbar">
        <Link to="/" style={{ color: location.pathname === "/" && "#1976d2" }}>
          About
        </Link>
        <Link
          to="/skills"
          style={{ color: location.pathname === "/skills" && "#1976d2" }}
        >
          Skills
        </Link>
        <Link
          to="/work"
          style={{ color: location.pathname === "/work" && "#1976d2" }}
        >
          Work
        </Link>
        <Link
          to="/contact"
          style={{ color: location.pathname === "/contact" && "#1976d2" }}
        >
          Contact
        </Link>
      </div>
    </>
  );
}

export default Navbar;
