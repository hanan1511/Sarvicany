import Style from "./ShowCust.module.css";
import PaginatedTable from '../PaginatedTable';
import { Table, Button } from 'react-bootstrap';
function ShowCust(){
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
            <div  className="col-md-12 p-3">
                <div className="row h-20 d-flex justify-content-around">
                    <div className="col-md-6 d-flex align-self-center p-4">
                        <div className={`${Style.cards}`}>
                            <i className="fa-solid fa-calendar-check my-4 fs-1"></i>
                            {/* <img src="customer.png" className="my-2" alt="cust" /> */}
                            <h4 className="my-2">Total Customers</h4>
                            <h3 className="my-2">number</h3>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-self-center p-4">
                        <div className={`${Style.cards}`}>
                            <img src="order.png" className="my-4" alt="cust" />
                            <h4 className="my-2">Total Customers made order</h4>
                            <h3 className="my-2">number</h3>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className={`${Style.tabular}`}>
                        <h2>Customers</h2><br/>
                        <PaginatedTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default ShowCust;