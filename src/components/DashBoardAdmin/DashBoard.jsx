import Style from "./DashBoard.module.css";
function DashBoard(){
    return(
        <>
        <div className="container mt-3 d-flex flex-column">
            <div className="row h-20 d-flex justify-content-around">
                <div className="col-3 d-flex align-self-center">
                    <div className={`${Style.cards}`}>
                        <img src="customer.png" alt="cust" />
                        <h4>Total Customers</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-3 d-flex align-self-center">
                    <div className={`${Style.cards}`}>
                        <img src="worker.png" alt="cust" />
                        <h4>Total Workers</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-3 d-flex align-self-center">
                    <div className={`${Style.cards}`}>
                        <img src="request.png" alt="cust" />
                        <h4>Total Requests</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-3 d-flex align-self-center">
                    <div className={`${Style.cards}`}>
                        <img src="service.png" alt="cust" />
                        <h4>Total Services</h4>
                        <h3>number</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className={`${Style.tabular}`}>
                    <h2>Workers' Requests</h2><br/>
                    <table className={`w-100 table ${Style.tables}`}>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <button className={`${Style.accept}`}>Accept</button>
                                <button className={`${Style.reject}`}>Details</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}
export default DashBoard;