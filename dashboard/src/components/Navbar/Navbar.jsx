import React from "react";
import { Link } from "react-router-dom";
import nocurve from "../../assets/nocurve.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-main ${Style.navbaro}`}>
      <div className="container">
        <Link className="navbar-brand" to="home">
          <img src={nocurve} className={`${Style.imgo}`} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${Style.navbarBrand}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="registerCustomer">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="cart">
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
