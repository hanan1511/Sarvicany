import Style from "./DashBoard.module.css";
import PaginatedTable from '../PaginatedTable';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import axios from "axios";
function DashBoard(){
    const columns = [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'ID', accessor: 'id' },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => <>
            <Button className={`${Style.reject}`}>Reject</Button>
            <Button className={`${Style.details}`}>Details</Button>
          </>,
          },
      ];
    const [error, seterror] = useState(null);
    const [data, setData ]=useState(null);
    async function fetchData() {
        try {
          const response = await axios.get('https://localhost:7188/api/Admin/getRequests');
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
        <div className="container mt-3 d-flex flex-column">
            <div className="row d-flex justify-content-around">
                <div className="col-md-3 d-flex align-self-center p-4">
                    <div className={`${Style.cards}`}>
                        <img src="customer.png" alt="cust" />
                        <h4>Total Customers</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-self-center p-4">
                    <div className={`${Style.cards}`}>
                        <img src="worker.png" alt="cust" />
                        <h4>Total Workers</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-self-center p-4">
                    <div className={`${Style.cards}`}>
                        <img src="request.png" alt="cust" />
                        <h4>Total Requests</h4>
                        <h3>number</h3>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-self-center p-4">
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
                    <PaginatedTable columns={columns} data={data.$values} />
                </div>
            </div>
        </div>
        </>
    );
}
export default DashBoard;