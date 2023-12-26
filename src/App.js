import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import RegisterCustomer from './components/RegisterCustomer/RegisterCustomer';
import Notfound from './components/Notfound/Notfound';
import LoginCustomer from './components/LoginCustomer/LoginCustomer';
import Guest from './components/Guest/Guest';
import DashBoard from './components/DashBoardAdmin/DashBoard';





let Routers = createBrowserRouter([
  {path:'/' , element:<Layout/> , children:[
    {index:true,element:<Guest/>},
    {path:'home',element :<Home/>},
    {path:'registerCustomer',element :<RegisterCustomer/>},
    {path:'loginCustomer',element :<LoginCustomer/>},
    {path:'DashBoard',element :<DashBoard/>},
    {index:'*',element :<Notfound/>},
    ]}
])



function App() {
  return <>
  <RouterProvider router={Routers}></RouterProvider>
  </>
}

export default App;
