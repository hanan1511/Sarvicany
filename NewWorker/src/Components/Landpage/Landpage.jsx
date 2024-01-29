import Table from "../Tables/Table";
import Style from "./Landpage.module.css"
function Landpage(){
    const data = [
        { OrderID: 10248, CustomerID: 'VINET', ShipName: 'Vins et alcools Chevalier', OrderDate: '1996-07-04' },
        { OrderID: 10249, CustomerID: 'VINET', ShipName: 'Vins et alcools Chevalier', OrderDate: '1996-07-04' },
        { OrderID: 10250, CustomerID: 'VINET', ShipName: 'Vins et alcools Chevalier', OrderDate: '1996-07-04' },
        { OrderID: 10251, CustomerID: 'VINET', ShipName: 'Vins et alcools Chevalier', OrderDate: '1996-07-04' },
        { OrderID: 10252, CustomerID: 'VINET', ShipName: 'Vins et alcools Chevalier', OrderDate: '1996-07-04' },
        { OrderID: 10253, CustomerID: 'VINET', ShipName: 'Vins et alcools Chevalier', OrderDate: '1996-07-04' },
        { OrderID: 10254, CustomerID: 'VINET', ShipName: 'Vins et alcools Chevalier', OrderDate: '1996-07-04' },
        // ... more data
    ];
    const columns=[
        {
            field:'OrderID',
            headerText:'Order ID',
            width:'200',
            textAlign:'center'
        },
        {
            field:'CustomerID',
            headerText:'Customer ID',
            width:'200',
            textAlign:'center'
        },
        {
            field:'ShipName',
            headerText:'Ship Name',
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
                <Table data={data} columns={columns} className={`col-md-12 ${Style.table}`}/>
            </div>
        </div>
        
        </>
    );
}
export default Landpage;