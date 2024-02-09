import Style from "./ShowCust.module.css";
import PaginatedTable from '../PaginatedTable';
import { Table, Button } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Style from "./RegisterCustomer.module.css";
import axios from "axios";
function ShowCust(){
    const columns = [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'ID', accessor: 'id' },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => <Button className={`${Style.reject}`} >Block</Button>,
          },,
      ];
    const [error, seterror] = useState(null);
    const [data, setData ]=useState(null);
    async function fetchData() {
        try {
          const response = await axios.get('https://localhost:7188/api/Admin/getCustomers');
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
 console.log(data.payload.$values);
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
                            <h3 className="my-2">{data.payload.$values.length}</h3>
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
                        <PaginatedTable columns={columns} data={data.payload.$values} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default ShowCust;