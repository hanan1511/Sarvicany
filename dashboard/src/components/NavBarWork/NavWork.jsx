import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React from "react";
import Style from "./NavWork.module.css";
import { Link } from "react-router-dom";

function NavWork() {
  return (
    <>
      <nav
        className={`container-fluid ${Style.navbaro} navbar-dark navbar navbar-expand-lg bg-main`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="nocurve.png" className={`${Style.myImage}`} />
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

          <div
            className={`collapse  ${Style.navbarBrand}  navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to="/addAvailability">
                  Availability
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/profile">
                  Profile
                </Link>
              </li>
              {/* <li className="nav-item">
          <Link className="nav-link active" to="#">Offers</Link>
        </li> */}
              <li className="nav-item ">
                <Link className="nav-link active" to="/serviceReg">
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavWork;
