import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Style from "./ServiceReg.module.css";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import { useLocation } from 'react-router-dom';

function ServicReg(){
    let navigate = useNavigate();
    const [error, seterror] = useState(null);
    const [avalService, setService] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        serviceId: "",
        Price: 0,
    });
    const location = useLocation();
    const workerId = location.state?.workerIdProp;
    console.log(workerId);
    async function registerForm() {
        setIsLoading(true);
        const response1 = await axios
        .post(
            `https://localhost:7188/api/Worker/registerService?workerId=${workerId}&serviceId=${formValues.serviceId}&Price=${formValues.Price}`
        )
        .catch((err) => {
        setIsLoading(false);
        seterror(err.response1.data.message);
        console.log(response1.data);
    });

    if (!response1.isError) {
      setIsLoading(false);
      navigate("/landpage");
      console.log(response1.data);
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://localhost:7188/api/services/GetAllServices/e7002d24-43e1-4433-9a5b-1f4d408219a6"
      );
      // Handle the response data
      if (response.status >= 200 && response.status < 300) {
        // Handle the response data
        setService(response.data.payload.$values);
      } else {
        // If the status code is not in the success range, throw an error
        throw new Error(`Request failed with status code ${response.status}`);
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    }
  }

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerForm();
  };
    return(
        <>
        <div className={`${Style.corners}`} >
          <img src="upperCorner2.png" className={`${Style.corner3}`} />
          <img src="upperCorner.png" className={`${Style.corner}`} />
        </div>
        <section className={` ${Style.signUpPage}`}>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="logo.png" className={`${Style.imgo} img-fluid  h-60 `}/>
                </div>
                <div className="col-md-6">
                <div className={` ${Style.signUpForm} p-4 rounded-3`}>
                    <div className="d-flex justify-content-center align-item-center">
                        <ul className={`${Style.steps_list}`}>
                            <li className={`${Style.steps_item}`}>
                                <span className={`${Style.countCurr}`}>1</span>
                                <span className={`${Style.infoCurr}`}>Personal info</span>
                            </li>
                            <li className={`${Style.steps_item}`}>
                                <span className={`${Style.count}`}>2</span>
                                <span className={`${Style.info}`}>Service info</span>
                            </li>
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">

                            <div className="col-md-12">
                            <h5>Select service</h5>
                            {avalService ? (
                                <select
                                name="serviceId"
                                id="serviceId"
                                className="rounded-2 w-100"
                                placeholder="service"
                                value={formValues.serviceId}
                                onChange={handleInputChange}
                            >
                          {avalService.map((serviceItem) => (
                            <option
                              key={serviceItem.$id}
                              value={serviceItem.serviceID}
                            >
                              {serviceItem.serviceName}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <p>Loading services...</p>
                      )}

                      {/* {formik.errors.firstName && formik.touched.firstName && (
                        <div className="alert p-2 mt-2 alert-danger">
                            {formik.errors.firstName}
                        </div>
                    )} */}
                    </div>
                    <div className="col-md-12">
                      <h5>Service Price</h5>
                      <input
                        type="number"
                        className="rounded-2 w-100"
                        placeholder="First name"
                        id="Price"
                        name="Price"
                        value={formValues.Price}
                        onChange={handleInputChange}
                      />
                      {/* {formik.errors.Price && formik.touched.Price && (
                        <div className="alert p-2 mt-2 alert-danger">
                            {formik.errors.Price}
                        </div>
                    )} */}
                    </div>

                    <div className="col-md-12 py-3">
                      {/* {isLoading ? (
                        <div className="d-flex justify-content-center">
                          <Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="#152238"
                            ariaLabel="three-dots-loading"
                            wrapperStyle
                            wrapperClass
                          />{" "}
                        </div>
                      ) : ( */}
                        <button
                          type="submit"
                          className={`btn   ${Style.btnMain} w-100`}
                          disabled={isLoading}
                        >
                          Add
                        </button>
                      {/* )} */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <img src="downCorner.png" className={`${Style.corner2}`} />
      </div>
        </>
    );
}
export default ServicReg;