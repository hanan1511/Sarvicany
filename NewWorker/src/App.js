//import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import WorkerReg from "./Components/WorkerReg/WorkerReg";
import ServicReg from "./Components/ServiceReg/ServiceReg";
import Landpage from "./Components/Landpage/Landpage";
import Table from "./Components/Tables/Table";
import ReqDetails from "./Components/ReqDetails/ReqDetails";
import Availability from "./Components/AddAvailability/Availability";
import Profile from "./Components/Profile/Profile";

let Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landpage /> },
      { path: "/serviceReg", element: <ServicReg /> },
      { path: "/workerReg", element: <WorkerReg /> },
      { path: "/table", element: <Table /> },
      { path: "/addAvailability", element: <Availability /> },
      { path: "/reqdetail", element: <ReqDetails /> },
      { path: "/profile", element: <Profile/> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={Routers}></RouterProvider>
    </>
  );
}

export default App;
