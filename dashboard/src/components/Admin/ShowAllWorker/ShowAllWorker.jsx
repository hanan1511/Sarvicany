import Style from "./ShowAllWorker.module.css";
import PaginatedTable from '../PaginatedTable';
import React, { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import worker from "../../../assets/worker.png"
import unkonwn from "../../../assets/unkonwn.png"
function ShowAllWorker() {
  let navigate = useNavigate();
  const [workers, setWorkers] = useState(null);
  const columns = [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'ID', accessor: 'id' },
    { Header: 'Activated', accessor: 'isVerified' },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }) => (
        <>
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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://localhost:7188/api/Admin/getServiceProviders'
      );
      // Handle the response data
      setWorkers(response.data.payload.$values);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      seterror('Error fetching data');
    }
  };

  const activeWorkers=[];

  if (workers) {
    workers.forEach((element) => {
      if (element.isVerified) {
        activeWorkers.push(element);
      }
    });
  }

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const handleDetails = (row) => {
    // Navigate to another page and pass the row data as props
    navigate('Workreq', { state: { rowData: row.original } });
  };

  let trueCount = 0;
  let falseCount = 0;
  if (workers && workers.length > 0) {
    workers.forEach((item) => {
      if (item.isVerified === true) {
        trueCount++;
      } else {
        falseCount++;
      }
    });
  }

  return (
    <>
      <div className="container mt-3 d-flex flex-column">
        <div className="row h-20 d-flex justify-content-around">
          <div className="col-md-6 d-flex align-self-center  p-4">
            <div className={`${Style.cards}`}>
              <img src={worker} className="my-2" alt="cust" />
              <h4 className="my-2">Total Workers Registerd </h4>
              <h3 className="my-2">{trueCount}</h3>
            </div>
          </div>
          <div className="col-md-6 d-flex align-self-center  p-4">
            <div className={`${Style.cards}`}>
              <img src={unkonwn} className="my-2" alt="cust" />
              <h4 className="my-2">Total Workers Requests</h4>
              <h3 className="my-2">{falseCount}</h3>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className={`${Style.tabular}`}>
            <h2>Workers Registered</h2>
            <br />
            {activeWorkers.length > 0 ? (
              <PaginatedTable columns={columns} data={activeWorkers} />
            ) : (
              <p>Loading workers...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowAllWorker;
