import Style from "./ShowAllWorker.module.css";
import PaginatedTable from '../PaginatedTable';
import { Table, Button } from 'react-bootstrap';
function ShowAllWorker(){
    const columns = [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Service', accessor: 'service' },
        { Header: 'Actions', accessor: 'actions' },
      ];
    
      const data = [
        { 
          name: 'Hanan Hossam', 
          email: 'Doe', 
          service: 'math lesson',
          actions: (
            <div style={{ display: 'flex' }}>
              <Button className={`${Style.details} mx-2`} variant="info">Details</Button>
              <Button className={`${Style.reject}`} variant="success">Block</Button>
            </div>
          )
        }
      ];
    return(
        <>
        <div className="container mt-3 d-flex flex-column">
            <div className="row h-20 d-flex justify-content-around">
                <div className="col-md-6 d-flex align-self-center  p-4">
                    <div className={`${Style.cards}`}>
                        {/* <i className="fa-solid fa-calendar-check my-4 fs-1"></i> */}
                        <img src="worker.png" className="my-2" alt="cust" />
                        <h4 className="my-2">Total Workers Registerd </h4>
                        <h3 className="my-2">number</h3>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-self-center  p-4">
                    <div className={`${Style.cards}`}>
                        <img src="unkonwn.png" className="my-2" alt="cust" />
                        <h4 className="my-2">Total Workers Requests</h4>
                        <h3 className="my-2">number</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className={`${Style.tabular}`}>
                    <h2>Workers Registered</h2><br/>
                    <PaginatedTable columns={columns} data={data} />
                </div>
            </div>
        </div>
        </>
    );
}
export default ShowAllWorker;