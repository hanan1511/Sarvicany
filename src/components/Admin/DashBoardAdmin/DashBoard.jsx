import Style from "./DashBoard.module.css";
import { Table, Button } from 'react-bootstrap';
import PaginatedTable from '../PaginatedTable';
function DashBoard(){
    const columns = [
        { Header: 'Customer', accessor: 'customer' },
        { Header: 'Worker', accessor: 'worker' },
        { Header: 'Date', accessor: 'date' },
        { Header: 'Services', accessor: 'services' },
        { Header: 'Status', accessor: 'status' },
        { Header: 'Actions', accessor: 'actions' },
      ];
    
      const data = [
        { customer: 'hanan Hossam', worker: 'Doe', date: '14/11/2023', services: 'math lesson', status: 'Confirmed', actions: <Button ClassName={`${Style.reject}`} variant="info">Details</Button> },
        // { customer: 'hanan', worker: 'John Doe', date: '14/11/2023', services: 'math lesson', status: 'Confirmed', actions: <Button variant="info">Details</Button> },
        // { customer: 'jjjj', worker: 'John', date: '15/11/2023', services: 'math lesson', status: 'Confirmed', actions: <Button variant="info">Details</Button> },
        // { customer: 'hanan Hossam', worker: 'Doe', date: '15/11/2023', services: 'math lesson', status: 'Confirmed', actions: <Button variant="info">Details</Button> },
        // Add more rows as needed
      ];
    return(
        <>
        <div className="container mt-3 d-flex flex-column">
            <div className="row d-flex justify-content-around">
                <div className="col-md-3 d-flex align-self-center">
                    <div className={`${Style.cards}`}>
                        <img src="customer.png" alt="cust" />
                        <h4>Total Customers</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-self-center">
                    <div className={`${Style.cards}`}>
                        <img src="worker.png" alt="cust" />
                        <h4>Total Workers</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-self-center">
                    <div className={`${Style.cards}`}>
                        <img src="request.png" alt="cust" />
                        <h4>Total Requests</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-self-center">
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
                    <PaginatedTable columns={columns} data={data} />
                </div>
            </div>
        </div>
        </>
    );
}
export default DashBoard;