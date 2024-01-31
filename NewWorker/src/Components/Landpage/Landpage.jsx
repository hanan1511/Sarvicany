import { boolean } from "yup";
import Table from "../Tables/Table";
import Style from "./Landpage.module.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Landpage(){
    let navigate = useNavigate();
    const [selectedRow, setSelectedRow] = useState(null);
    const handleRowClick = (rowData) => {
        console.log('Clicked Row Data:', rowData);
        //setSelectedRow(rowData);
        navigate(`/reqdetail`,{ state: { rowData } });
    };

    const columns=[
        {
            field:'CustomerName',
            headerText:'Customer Name',
            width:'200',
            textAlign:'center'
        },
        {
            field:'CustomerAddress',
            headerText:'Customer Address',
            width:'200',
            textAlign:'center'
        },
        {
            field:'OrderDate',
            headerText:'Order Date',
            width:'200',
            format:'yMd',
            textAlign:'center'
        },
        {
            field:'OrderTime',
            headerText:'Order Time',
            width:'200',
            textAlign:'center'
        },
        {
            field:'OrderStatus',
            headerText:'Order Approved',
            width:'200',
            formate:boolean,
            textAlign:'center'
        },
        {
            field: 'ButtonColumn',
            headerText: 'Action',
            width: '100',
            template: () => (
                <button className={`${Style.button}`} onClick={() => handleRowClick}>
                  Details
                </button>
              ),
            textAlign: 'Center',
          },
    ];
    const data = [
        { CustomerName: 10248, CustomerAddress: 'VINET', OrderTime: 'Vins et alcools Chevalier', OrderDate: '1996-07-04',   OrderStatus:false },
        { CustomerName: 10249, CustomerAddress: 'VINET', OrderTime: 'Vins et alcools Chevalier', OrderDate: '1996-07-04',   OrderStatus:false },
        { CustomerName: 10250, CustomerAddress: 'VINET', OrderTime: 'Vins et alcools Chevalier', OrderDate: '1996-07-04',   OrderStatus:false },
        { CustomerName: 10251, CustomerAddress: 'VINET', OrderTime: 'Vins et alcools Chevalier', OrderDate: '1996-07-04',   OrderStatus:false },
        { CustomerName: 10252, CustomerAddress: 'VINET', OrderTime: 'Vins et alcools Chevalier', OrderDate: '1996-07-04',   OrderStatus:false },
        { CustomerName: 10253, CustomerAddress: 'VINET', OrderTime: 'Vins et alcools Chevalier', OrderDate: '1996-07-04',   OrderStatus:true },
        { CustomerName: 10254, CustomerAddress: 'VINET', OrderTime: 'Vins et alcools Chevalier', OrderDate: '1996-07-04',   OrderStatus:false },
        // ... more data
    ];
    
    return(
        <>
        <div className={`${Style.land}`}>
            <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-md-5">
                    <img src="logo2.png" className={`${Style.imgo} img-fluid `}/>
                </div>
                <p className="col-md-5">Welcome to Employees Section</p>
            </div>
        </div>
        <div className="container py-3">
            <div className="row d-flex justify-content-center align-item-center ">
                <div className="col-md-12">
                    <p className={`${Style.bigHead}`}>Requests</p>
                    <p className={`${Style.smallHead}`}>Requests</p>
                    <p className={`${Style.desc}`}>All Customers Requests for this week</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-item-center ">
                <Table data={data} columns={columns} handleRowClick={handleRowClick} className={`col-md-12 ${Style.table}`}/>
            </div>
        </div>
        </>
    );
}
export default Landpage;