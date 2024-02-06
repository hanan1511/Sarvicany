import React from "react";
import Style from "./serviceDescription.module.css";
import "./serviceDescription.module.css";
import photo from "./recycled-shoe-product-image-015_dIXN9miF.webp";
import Mission from "../Mission/Mission.jsx";
export default function ServiceDescription() {
  return (
    <>
      <section className={`${Style.services}`}>
        <div className="container bg-white p-5 rounded-2">
          <div className="row ">
            <div className="col-md-5">
              <img src={photo} className="w-100" alt="imago" />
            </div>
            <div className="col-md-5 offset-md-1 offset-0 mt-md-0 mt-3">
              <div className=" border-1 border-black border-bottom pb-4">
                <h4 className="fs-5 fw-light my-2">home maintainince, Shop</h4>
                <h1 className="fs-1">plummbing</h1>
                <h5 className={`my-4 ${Style.price}`}>$12.00</h5>
                <p className={`${Style.para}`}>
                  Our plumbing services are designed to keep your home running
                  smoothly. Our team of skilled plumbers is equipped with the
                  latest tools and techniques to resolve your plumbing issues
                  quickly and effectively. We take pride in providing
                  high-quality services with a focus on customer satisfaction.
                </p>
                <button className="btn text-white bg-black rounded-0 fw-medium rounded-1">
                  Add to cart
                </button>
              </div>
              <div className="my-4">
                <h2 className={`${Style.texto}`}>
                  <span>Category </span> home maintainince{" "}
                  <span>Collection </span>Shop
                </h2>
              </div>
              <div className="border rounded-1 border-black d-flex justify-content-center align-items-center p-3 position-relative mt-5">
                <div className={` rounded-2 px-3 ${Style.middleSpan}`}>
                  <h6>Guaranteed Safe Checkout</h6>
                </div>
                <div className="mx-1">
                  <i className="fa-brands fa-cc-paypal fs-1"></i>
                </div>
                <div className="mx-1">
                  <i className="fa-brands fa-cc-visa fs-1"></i>
                </div>
                <div className="mx-1">
                  <i className="fa-brands fa-cc-amex fs-1"></i>
                </div>
                <div className="mx-1">
                  <i className="fa-brands fa-cc-mastercard fs-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Style.margino}`}>
            <div className="row">
              <div className="col-md-3">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <button
                      className={`accordion-button ${Style.butno}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Description
                    </button>
                  </div>
                  <div className="accordion-item">
                    <button
                      className={`collapsed accordion-button ${Style.butno}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Additional information
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <h3>Description</h3>
                        Our plumbing services are designed to help you keep your
                        home in top condition. Our team of skilled plumbers is
                        equipped with the latest tools and techniques to ensure
                        that your plumbing issues are resolved quickly and
                        effectively. From leaky faucets to clogged drains, we’ve
                        got you covered. We take pride in providing high-quality
                        services with a focus on customer satisfaction. Our
                        plumbers are experienced professionals who take care of
                        your home as if it were their own. We understand that
                        plumbing issues can be stressful, which is why we offer
                        fast, reliable services that you can count on. With us,
                        you can rest assured that your plumbing problems will be
                        resolved in no time, leaving your home running smoothly.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <h3>Additional information</h3>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quibusdam inventore temporibus voluptas assumenda
                        nostrum consectetur laborum exercitationem. Aut iste in
                        maiores explicabo, assumenda neque nisi voluptas sit
                        quas illo unde? Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Labore ut pariatur enim obcaecati
                        ullam deleniti veritatis. Inventore exercitationem
                        adipisci sint minus illum aspernatur facilis ex mollitia
                        asperiores! Quisquam, ut laborum!
                      </div>
                    </div>
                  </div>
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
