import Style from "./WorkerReqDet.module.css"
import { useLocation } from 'react-router-dom';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function WorkerReqDet(props){
    let navigate = useNavigate();
    const location = useLocation();
    const rowData = location.state?.rowData;
    console.log(rowData);
    const id=rowData.id;
    const active=rowData.isVerified;
    const [error, seterror] = useState(null);

    async function handleAccept(){
        // Navigate to another page and pass the row data as props
        const response = await axios.post(`https://localhost:7188/api/Admin/ApproveServiceProvider?WorkerID=${id}`)
        .catch((err) => {
        seterror(err.response.data.message);
      });
      if(response){
        window.alert("the worker accepted");
        if(active){
            navigate('/showWork');
        }else{
            navigate('/DashBoard')
        }
      }else{
        console.log(error);
      }
    }

    async function handleReject(){
        // Navigate to another page and pass the row data as props
        const response = await axios.post(`https://localhost:7188/api/Admin/RejectServiceProvider?WorkerID=${id}`)
        .catch((err) => {
        seterror(err.response.data.message);
      });
      if(response){
        window.alert("the worker rejected");
        if(active){
            navigate('/showWork');
        }else{
            navigate('/DashBoard')
        }
      }else{
        console.log(error);
      }
    }

    return(
        <>
        <section>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div></div>
                </div>
                <div className="col-md-6 offset-md-3 offset-0 my-5">
                    <div>
                        <div className="d-flex justify-content-center align-items-center my-5">
                            {/* <h1>Profile</h1> */}
                        </div>
                        <div className={` ${Style.colourr} w-100 h-50 p-4 rounded-2`}>
                            <div className="row">
                                <div className="col-md-6 p-1">
                                    <label for="firstName" className="fs-3 fw-bolder">first name:</label>
                                    <div className="bg-white text-center rounded-2">
                                        <h3>{rowData.firstName}</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 p-1">
                                    <label for="lastName" className="fs-3 fw-bolder">last name:</label>
                                    <div className="bg-white text-center rounded-2">
                                        <h3>{rowData.lastName}</h3>
                                    </div>
                                </div>
                                <div className="col-md-12 p-1">
                                    <label for="latName" className="fs-3 fw-bolder">National Id:</label>
                                    <div className="bg-white text-center rounded-2">
                                        <h3>30401212457896</h3>
                                    </div>
                                </div>
                                <div className="col-md-12 p-1">
                                    <label for="Email" className="fs-3 fw-bolder">Email:</label>
                                    <div className="bg-white text-center rounded-2">
                                        <h3>{rowData.email}</h3>
                                    </div>
                                </div>
                                <div className="col-md-12 p-1 my-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h1>services</h1>
                                    </div>
                                    <div className="col-md-12 d-flex">
                                        <div className="row">
                                            <div className="col-md-4 mt-3 p-1">
                                                <div>
                                                    <label for="lastName" className="fs-5 fw-bolder">Service
                                                        Criteria:</label>
                                                        <div className="bg-white text-center rounded-2">
                                                            <h3>home maintenance</h3>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-3 p-1">
                                                <div>
                                                    <label for="price" className="fs-5 fw-bolder">price:</label>
                                                    <div className="bg-white text-center rounded-2">
                                                        <h3>100L.E</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-3 p-1">
                                                <div>
                                                    <label for="serviceName" className="fs-5 fw-bolder">Service
                                                        name:</label>
                                                        <div className="bg-white text-center rounded-2">
                                                            <h3></h3>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3 p-1">
                                                <div>
                                                    <label for="serviceDescription" className="fs-5 fw-bolder">Service
                                                        description:</label>
                                                        <div className="bg-white rounded-2 p-2">
                                                            <h3></h3>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3 d-flex">
                                    <div className="row">
                                        <div className="d-flex justify-content-center align-items-center .col-md-12">
                                            <h1></h1>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div
                                                className="w-100 h-auto bg-body-tertiary rounded-1 d-flex justify-content-center align-items-center">
                                                <h1></h1>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div
                                                className="w-100 h-auto bg-body-tertiary rounded-1 d-flex justify-content-center align-items-center">
                                                <h1></h1>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div
                                                className="w-100 h-auto bg-body-tertiary rounded-1 d-flex justify-content-center align-items-center">
                                                <h1></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                                    {active ?(
                                        <button className={`${Style.reject} p-2`}>Delete</button>):(
                                            <>
                                            <button className={`${Style.accept} p-2`} onClick={handleAccept}>Accept</button>
                                            <button className={`${Style.reject} p-2`} onClick={handleReject} >Reject</button>
                                            </>
                                            
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>

        </>
    );
}

export default WorkerReqDet;