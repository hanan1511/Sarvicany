import React from "react";
import Style from "./servicesCriteria.module.css";
import photo from "./recycled-shoe-product-image-015_dIXN9miF.webp";
import Mission from "../Mission/Mission.jsx";
export default function ServicesCriteria() {
  return (
    <>
      <section className={`p-5 ${Style.services}`}>
        <div className="container bg-white p-5 rounded-2">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1 className="fw-bolder fs-1">home maintainince</h1>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <img src={photo} className="w-100 mb-3" alt="" />
              <h2 className="card-title my-2">plummbing</h2>
              <p className="card-text">hello from our description</p>
            </div>
            <div className="col-md-4 mt-5">
              <img src={photo} className="w-100 mb-3" alt="" />
              <h2 className="card-title my-2">plummbing</h2>
              <p className="card-text">hello from our description</p>
            </div>
          </div>
        </div>
      </section>
      <Mission />
    </>
  );
}
