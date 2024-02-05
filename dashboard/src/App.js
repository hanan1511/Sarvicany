import React, { useEffect } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Admin from './components/Admin.jsx';
import Area from './pages/Charts/Area.jsx';
import Bar from './pages/Charts/Bar.jsx';
import Pie from './pages/Charts/Pie.jsx';
import Line from './pages/Charts/Line.jsx';
import Pyramid from './pages/Charts/Pyramid.jsx';
import ColorMapping from './pages/Charts/ColorMapping.jsx';
import Financial from './pages/Charts/Financial.jsx';
import Stacked from './pages/Charts/Stacked.jsx';
import Calendar from './pages/Calendar.jsx';
import Ecommerce from './pages/Ecommerce.jsx';
import Orders from './pages/Orders.jsx';
import Employees from './pages/Employees.jsx';
import Customers from './pages/Customers.jsx';
import Kanban from './pages/Kanban.jsx';
import Editor from './pages/Editor.jsx';
import ColorPicker from './pages/ColorPicker.jsx';
import Notfound from './pages/Notfound.jsx';
import Criteria from './pages/Criteria.jsx';
import RequestDet from './pages/RequestDet.jsx';
import Providers from './pages/Providers.jsx';
import Service from './pages/Service.jsx';
import OrderDet from './pages/OrderDet.jsx';

let routers = createBrowserRouter([
  { path:'/admin',element:<Admin/>, children:[
    {index:true,element:<Ecommerce/>},
    {path:'ecommerce' , element:<Ecommerce/>},
    {path:'orders' , element:<Orders/>},
    {path:'customers' , element:<Employees/>},
    {path:'Providers Requests' , element:<Customers/>},
    {path:'kanban' , element:<Kanban/>},
    {path:'editor' , element:<Editor/>},
    {path:'calendar' , element:<Calendar/>},
    {path:'color-picker' , element:<ColorPicker/>},
    {path:'line' , element:<Line/>},
    {path:'area' , element:<Area/>},
    {path:'bar' , element:<Bar/>},
    {path:'pie' , element:<Pie/>},
    {path:'financial' , element:<Financial/>},
    {path:'color-mapping' , element:<ColorMapping/>},
    {path:'pyramid' , element:<Pyramid/>},
    {path:'stacked' , element:<Stacked/>},
    {path:'criteria' , element:<Criteria/>},
    {path:'reqdet' , element:<RequestDet/>},
    {path:'service Providers' , element:<Providers/>},
    {path:'service' , element:<Service/>},
    {path:'orderdet' , element:<OrderDet/>},
    {path:'*' , element:<Notfound/>}
  ]}
])



const App = () => {
  return <>
    <RouterProvider router={routers}/>
  </>
}

export default App
