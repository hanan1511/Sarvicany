import Style  from "./ShowServ.module.css";
import { Table, Button } from 'react-bootstrap';
import PaginatedTable from '../PaginatedTable';

const ShowServ = () => {
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


  return (
    <div className="container mt-3 d-flex flex-column">
        <div className="row h-20 d-flex justify-content-around">
            <div className="col-md-6 d-flex align-self-center">
                <div className={`${Style.cards}`}>
                    <i className="fa-solid fa-toolbox my-4 fs-1"></i>
                    {/* <img src="customer.png" className="my-2" alt="cust" /> */}
                    <h4 className="my-2">Total Service Criteria</h4>
                    <h3 className="my-2">number</h3>
                </div>
            </div>
            <div className="col-md-6 d-flex align-self-center">
                <div className={`${Style.cards}`}>
                    <i class="fa-solid fa-screwdriver-wrench my-4 fs-1"></i>
                    <h4 className="my-2">Total Services</h4>
                    <h3 className="my-2">number</h3>
                </div>
            </div>
        </div>
        <div className="row my-4">
            <div className={`${Style.tabular}`}>
                <h2>Customers</h2><br/>
                <PaginatedTable columns={columns} data={data} />
            </div>       
        </div>
    </div>
    );
};

export default ShowServ;