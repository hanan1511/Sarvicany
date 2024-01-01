// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import RegisterCustomer from './components/RegisterCustomer/RegisterCustomer';
import Notfound from './components/Notfound/Notfound';
import LoginCustomer from './components/LoginCustomer/LoginCustomer';
import Guest from './components/Guest/Guest';
import DashBoard from './components/Admin/DashBoardAdmin/DashBoard';
import ShowCust from './components/Admin/ShowCustomer/ShowCust';
import ShowServ from './components/Admin/ShowService/ShowServ';
import ShowCustReq from './components/Admin/ShowAllReq/ShowCustReq';
import ShowAllWorker from './components/Admin/ShowAllWorker/ShowAllWorker';
import WorkerReqDet from './components/Admin/WorkerReqDet/WorkerReqDet'



let Routers = createBrowserRouter([
  {path:'/' , element:<Layout/> , children:[
    {index:true,element:<Guest/>},
    {path:'home',element :<Home/>},
    {path:'registerCustomer',element :<RegisterCustomer/>},
    {path:'loginCustomer',element :<LoginCustomer/>},
    {path:'DashBoard',element :<DashBoard/>},
    {path:'showcust',element :<ShowCust/>},
    {path:'showserv',element :<ShowServ/>},
    {path:'showcustreq',element :<ShowCustReq/>},
    {path:'showWork',element :<ShowAllWorker/>},
    {path:'Workreq',element :<WorkerReqDet/>},
    // {path:'showserv',element :<YourComponent/>},
    {index:'*',element :<Notfound/>},
    ]}
])



function App() {
  return <>
  <RouterProvider router={Routers}></RouterProvider>
  </>
}

export default App;
