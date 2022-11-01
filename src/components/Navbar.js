import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MedicalGroup11
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/employee"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                EMPLOYEE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/patient"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PATIENT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/appointment"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                APPOINTMENTS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
