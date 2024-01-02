import Style  from "./ShowServ.module.css";
import { Table, Button } from 'react-bootstrap';
import PaginatedTable from '../PaginatedTable';
import React, { useState, useEffect } from "react";
import axios from "axios";
const ShowServ = () => {
    const columns = [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'ID', accessor: 'id' },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => <Button className={`${Style.reject}`} >Delete</Button>,
          },,
      ];
    const [error, seterror] = useState(null);
    const [data, setData ]=useState(null);
    async function fetchData() {
        try {
          const response = await axios.get('https://localhost:7188/api/Admin/getServices');
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
                    <h3 className="my-2">{data.payload.$values.length}</h3>
                </div>
            </div>
        </div>
        <div className="row my-4">
            <div className={`${Style.tabular}`}>
                <h2>All Services</h2><br/>
                <PaginatedTable columns={columns} data={data.payload.$values} />
            </div>       
        </div>
    </div>
    );
};

export default ShowServ;