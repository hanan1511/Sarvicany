import Style from "./ShowAllWorker.module.css";
import PaginatedTable from '../PaginatedTable';
import React, { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import axios from "axios";
function ShowAllWorker(){
    const columns = [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'ID', accessor: 'id' },
        { Header: 'Activated', accessor: 'isVerified' },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => <>
            <Button className={`${Style.reject}`}>Reject</Button>
            <Button className={`${Style.details}`}>Details</Button>
          </>,
          },,
      ];
    const [error, seterror] = useState(null);
    const [data, setData ]=useState(null);
    async function fetchData() {
        try {
          const response = await axios.get('https://localhost:7188/api/Admin/getServiceProviders');
          // Handle the response data
          setData(response.data);
        } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error);
        }
      }
      
      // Call fetchData when the component mounts
      useEffect(() => {
        fetchData();
      }, []);
    
      const values = data.payload.$values;
      let trueCount = 0;
        let falseCount = 0;
    if (values && values.length > 0) {
        
      
        values.forEach(item => {
          if (item.isVerified === true) {
            trueCount++;
          } else {
            falseCount++;
          }
        });
    }
    return(
        <>
        <div className="container mt-3 d-flex flex-column">
            <div className="row h-20 d-flex justify-content-around">
                <div className="col-md-6 d-flex align-self-center  p-4">
                    <div className={`${Style.cards}`}>
                        {/* <i className="fa-solid fa-calendar-check my-4 fs-1"></i> */}
                        <img src="worker.png" className="my-2" alt="cust" />
                        <h4 className="my-2">Total Workers Registerd </h4>
                        <h3 className="my-2">{trueCount}</h3>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-self-center  p-4">
                    <div className={`${Style.cards}`}>
                        <img src="unkonwn.png" className="my-2" alt="cust" />
                        <h4 className="my-2">Total Workers Requests</h4>
                        <h3 className="my-2">{falseCount}</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className={`${Style.tabular}`}>
                    <h2>Workers Registered</h2><br/>
                    <PaginatedTable columns={columns} data={data.payload.$values} />
                </div>
            </div>
        </div>
        </>
    );
}
export default ShowAllWorker;