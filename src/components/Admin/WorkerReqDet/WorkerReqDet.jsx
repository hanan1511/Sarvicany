import Style from "./WorkerReqDet.module.css"
function WorkerReqDet(){

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
                                        <h3>hassan</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 p-1">
                                    <label for="lastName" className="fs-3 fw-bolder">last name:</label>
                                    <div className="bg-white text-center rounded-2">
                                        <h3>Ramadan</h3>
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
                                        <h3>hr033469@gmail.com</h3>
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
                                                            <h3>math lesson</h3>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3 p-1">
                                                <div>
                                                    <label for="serviceDescription" className="fs-5 fw-bolder">Service
                                                        description:</label>
                                                        <div className="bg-white rounded-2 p-2">
                                                            <h3>hassan</h3>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3 d-flex">
                                    <div className="row">
                                        <div className="d-flex justify-content-center align-items-center .col-md-12">
                                            <h1>availability locations</h1>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div
                                                className="w-100 h-auto bg-body-tertiary rounded-1 d-flex justify-content-center align-items-center">
                                                <h1>nasr city</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div
                                                className="w-100 h-auto bg-body-tertiary rounded-1 d-flex justify-content-center align-items-center">
                                                <h1>nasr city</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-3">
                                            <div
                                                className="w-100 h-auto bg-body-tertiary rounded-1 d-flex justify-content-center align-items-center">
                                                <h1>nasr city</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                                    <button className={`${Style.accept} p-2`}>Accept</button>
                                    <button className={`${Style.reject} p-2`}>Reject</button>
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