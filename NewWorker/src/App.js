//import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import WorkerReg from "./Components/WorkerReg/WorkerReg";
import ServicReg from "./Components/ServiceReg/ServiceReg";
import Landpage from "./Components/Landpage/Landpage";
import Table from './Components/Tables/Table';

let Routers = createBrowserRouter([
  {path:'/',element:<Layout/>, children:[
    {index:true,element:<WorkerReg/>},
    {path:'/serviceReg',element:<ServicReg/>},
    {path:'/landpage',element:<Landpage/>},
    {path:'/table',element:<Table/>}
  ]}
])
function App() {
  return (
   <>
   <RouterProvider router={Routers}></RouterProvider>
   </>
  );
}

export default App;
