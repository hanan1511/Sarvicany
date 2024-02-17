import Style from "./ShowCustReq.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from 'react-bootstrap';
import PaginatedTable from '../PaginatedTable';
function ShowCustReq(){
    const columns = [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'ID', accessor: 'id' },
        { Header: 'Service', accessor: 'service' },
        { Header: 'State', accessor: 'state' },
        { Header: 'Worker', accessor: 'worker' },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => <Button className={`${Style.details}`} >Details</Button>,
          },,
      ];
    const [error, seterror] = useState(null);
    const [data, setData ]=useState(null);
    async function fetchData() {
        try {
          const response = await axios.get('https://localhost:7188/');
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
    
        <div className="row my-4">
            <div className={`${Style.tabular}`}>
                <h2>Customers' Requestes</h2><br/>
                {/* <PaginatedTable columns={columns} data={data.payload.$values} /> */}
            </div>       
        </div>
    </section>
    </>
    );
}
export default ShowCustReq;