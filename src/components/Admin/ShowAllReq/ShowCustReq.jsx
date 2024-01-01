import Style from "./ShowCustReq.module.css";

function ShowCustReq(){
    return(
        <>
        <section className={`${Style.mainPadding}`}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center p-4">
                    <div className={`${Style.bg_secondaary} mb-5 rounded-2 p-2`}>
                        <i className="fa-solid fa-calendar-check fs-1 my-4"></i>
                        <h2 className="text-secondary fw-bolder my-3">Total Requests Done</h2>
                        <h2 className="fw-bolder my-4" style={{ marginBottom: '20px' }}>30</h2>
                    </div>
                </div>
                <div className="col-md-6 text-center p-4">
                    <div className={`${Style.bg_secondaary} mb-5 rounded-2 p-2`}>
                        <i className="fa-solid fa-user fs-1 my-4"></i>
                        <h2 className="text-secondary fw-bolder my-3">Total Requests Done</h2>
                        <h2 className="fw-bolder my-4" style={{ marginBottom: '20px' }}>30</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container-fluid mt-5">
            <div className="col-md-12 p-3">
                <div className={`${Style.bg_secondaary} rounded-2 p-3`}>
                    <h2 className="mb-4 fw-bolder">Requests</h2>
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className={`${Style.bg_secondaary} fw-bolder`}>Customer</th>
                                    <th className={`${Style.bg_secondaary} fw-bolder`}>Worker</th>
                                    <th className={`${Style.bg_secondaary} fw-bolder`}>Date</th>
                                    <th className={`${Style.bg_secondaary} fw-bolder`}>Services</th>
                                    <th className={`${Style.bg_secondaary} fw-bolder`}>Status</th>
                                    <th className={`${Style.bg_secondaary} fw-bolder`}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>hanan Hossam</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>John Doe</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>14/11/2023</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>math lesson</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>Confirmed</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}><button
                                            className="btn btn-info text-white fw-bolder">
                                            Details
                                        </button></td>
                                </tr>
                                <tr>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}> Hossam</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>John Doe</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>14/11/2023</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>math lesson</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>Confirmed</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}><button
                                            className="btn btn-info text-white fw-bolder">
                                            Details
                                        </button></td>
                                </tr>
                                <tr>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>hassan </td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>John Doe</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>14/11/2023</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>math lesson</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>Confirmed</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>
                                        <button
                                            className="btn btn-info text-white fw-bolder">
                                            Details
                                        </button></td>
                                </tr>
                                <tr>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>ashrf</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>John Doe</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>14/11/2023</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>math lesson</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}>Confirmed</td>
                                    <td className={`${Style.bgCard} text-secondary fw-bolder`}><button
                                            className="btn btn-info text-white fw-bolder">
                                            Details
                                        </button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}
export default ShowCustReq;