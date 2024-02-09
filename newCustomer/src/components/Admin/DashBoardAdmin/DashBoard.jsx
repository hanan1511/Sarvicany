import Style from "./DashBoard.module.css";
import PaginatedTable from '../PaginatedTable';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DashBoard() {
    let navigate = useNavigate();
    const columns = [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'ID', accessor: 'id' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <>
            <Button
              className={`${Style.reject}`}
              onClick={() => handleReject(row.original.id)}
            >
              Reject
            </Button>
            <Button
              className={`${Style.details}`}
              onClick={() => handleDetails(row)}
            >
              Details
            </Button>
          </>
        ),
      },
    ];
    const [error, seterror] = useState(null);
    const [data, setData] = useState(null);

    async function fetchData() {
      try {
        const response = await axios.get(
          'https://localhost:7188/api/Admin/getRequests'
        );
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
  
    const handleDetails = (row) => {
      // Navigate to another page and pass the row data as props
      navigate('/Workreq', { state: { rowData: row.original } });
    };
  
    async function handleReject(id) {
      // Navigate to another page and pass the row data as props
      const response1 = await axios
        .post(
          `https://localhost:7188/api/Admin/RejectServiceProvider?WorkerID=${id}`
        )
        .catch((err) => {
          seterror(err.response1.data.message);
        });
      if (response1) {
        window.alert('the Worker is rejected');
      } else {
        console.log(error);
      }
    }
  
    return (
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
            <h2>Workers' Requests</h2>
            <br />
            {data && data.$values ? (
              <PaginatedTable columns={columns} data={data.$values} />
            ) : (
              <p>Loading workers...</p>
            )}
          </div>
        </div>
        </div>
        </>
    );
  }
  
  export default DashBoard;
  