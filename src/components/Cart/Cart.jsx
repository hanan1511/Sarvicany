import React from "react";
import Style from "./Cart.module.css";
import Mission from "../Mission/Mission.jsx";
export default function Cart() {
  return (
    <>
      <section className={`p-5 ${Style.services}`}>
        <div className="container bg-white p-5 rounded-2">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div>
                <h1 className={`text-center ${Style.text1}`}>Cart</h1>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className={`rounded-1 ${Style.bordero}`}>
                <div
                  className={`d-flex justify-content-evenly  p-3 ${Style.bgColor}`}
                >
                  <h3 className={`${Style.text3}`}>Service</h3>
                  <h3 className={`${Style.text3}`}>Price</h3>
                  <h3 className={`${Style.text3}`}>Provider</h3>
                  <h3 className={`${Style.text3}`}>Action</h3>
                </div>
                <div className="d-flex justify-content-evenly bg-white  p-3 rounded-1">
                  <h3 className={`${Style.text3}`}>Home maintin</h3>
                  <h3 className={`${Style.text3}`}>$20.00</h3>
                  <h3 className={`${Style.text3}`}>mohamed</h3>
                  <h3 className={`${Style.text3}`}>
                    <button className="border-0 rounded-1">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`rounded-1 ${Style.bordero}`}>
                <div className={`p-4 ${Style.bgColor}`}>
                  <h2 className="text-black">Cart Totals</h2>
                </div>
                <div
                  className={`p-3 d-flex justify-content-between bg-white ${Style.bottomBorder}`}
                >
                  <p className={`${Style.text3}`}>Subtotal</p>
                  <span className={`${Style.text3}`}>$50.00</span>
                </div>
                <div
                  className={`p-3 d-flex justify-content-between bg-white ${Style.bottomBorder}`}
                >
                  <p className={`${Style.text3}`}>
                    Shipping <br />
                    <span  className={`text-black fw-light ${Style.text3}`}>flat_rate:</span>{" "}
                  </p>
                  <span  className={`fw-bolder ${Style.text3}`}>$15.00</span>
                </div>
                <div className={`p-3 d-flex justify-content-between bg-white`}>
                  <p className={`${Style.text3}`}>Total</p>
                  <span className={`${Style.text3}`}>$75.00</span>
                </div>
                <div className="bg-white p-3">
                  <button className="btn rounded-1 bg-black text-white fw-bolder w-100">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Mission/>
    </>
  );
}
