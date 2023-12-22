import React from 'react'
import Style from './Footer.module.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return <>
  <div className="container-fluid  mt-5 px-0">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
        <section className=" pt-1">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <Link to="#" className="text-white">MDBootstrap</Link>
                </p>
                <p>
                  <Link to="#" className="text-white">MDWordPress</Link>
                </p>
                <p>
                  <Link to="#" className="text-white">BrandFlow</Link>
                </p>
                <p>
                  <Link to="#" className="text-white">Bootstrap Angular</Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <Link to="#" className="text-white">Your Account</Link>
                </p>
                <p>
                  <Link to="#" className="text-white">Become an Affiliate</Link>
                </p>
                <p>
                  <Link to="#" className="text-white">Shipping Rates</Link>
                </p>
                <p>
                  <Link to="#" className="text-white">Help</Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  </>
}
