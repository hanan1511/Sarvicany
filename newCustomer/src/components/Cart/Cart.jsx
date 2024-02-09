import React ,{useEffect,useState}from "react";
import Style from "./Cart.module.css";
import Mission from "../Mission/Mission.jsx";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Cart() {
  const [data,setData]=useState(null);
  const navigate = useNavigate();
  //http://localhost:3000/
const cutomerID="d9bfc562-3f3d-42ba-817b-bc54eff949c6";
const [summtion,setSum]=useState(0);
async function getCart(){
  const response = await axios.get(`https://localhost:7188/api/Customer/getCart?customerId=${cutomerID}`);
  if(!response.data.isError){
    setData(response.data.payload.requestedServices);
  }
}

  async function remove(id){
    const response= await axios.post(`https://localhost:7188/api/Customer/removeFromCart?customerId=${cutomerID}&requestId=${id}`);
    if(!response.data.isError){
      alert("the order removed from the cart");
      window.location.reload();
    }
  }
  function handelDelete(id){
    remove(id);
  }
  useEffect(()=>{
    getCart();
    if (data) {
      const totalSum = data.reduce((acc, curr) => acc + curr.price, 0);
      setSum(totalSum);
    }
  },[data]);

  function handelButton(){
    navigate('/checkout',{state:cutomerID});
  }
  return (
    <>
      <section className={`p-5 ${Style.services}`}>
        <div className="container bg-white p-5 rounded-2">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div>
                <h1 className={`text-center ${Style.text1}`}>Cart</h1>
              </div>
            </div>
            {console.log(data)}
            {data&&
            <div className="row">
              <div className="col-md-8 ">  
                <div className={`rounded-1 ${Style.bordero}`}>
                  <div
                    className={`d-flex justify-content-evenly  p-3 ${Style.bgColor}`}
                  >
                    <h3 className={`${Style.text3}`}>Service</h3>
                    <h3 className={`${Style.text3}`}>Provider</h3>
                    <h3 className={`${Style.text3}`}>Price</h3>
                    <h3 className={`${Style.text3}`}>Action</h3>
                  </div>
                  {data.map((ele) => (
                    <div className="d-flex justify-content-evenly bg-white  p-3 rounded-1" key={ele.serviceRequestID}>
                      <h3 className={`${Style.text3}`}>{ele.serviceName}</h3>
                      <h3 className={`${Style.text3}`}>{ele.firstName}</h3>
                      <h3 className={`${Style.text3}`}>{ele.price}</h3>
                      <h3 className={`${Style.text3}`}>
                        <button className="border-0 rounded-1" onClick={() => handelDelete(ele.serviceRequestID)}>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </h3>
                    </div>  
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <div className={`rounded-1 ${Style.bordero}`}>
                  <div className={`p-4 ${Style.bgColor}`}>
                    <h2 className="text-black">Cart Totals</h2>
                  </div>
                  <div
                    className={`p-3 d-flex justify-content-between bg-white ${Style.bottomBorder}`}
                  >
                    <p className={`${Style.text3}`}>Subtotal</p>
                    <span className={`${Style.text3}`}>{summtion}</span>
                  </div>
                  <div className={`p-3 d-flex justify-content-between bg-white`}>
                    <p className={`${Style.text3}`}>Total</p>
                    <span className={`${Style.text3}`}>{summtion}</span>
                  </div>
                  <div className="bg-white p-3">
                    <button className="btn rounded-1 bg-black text-white fw-bolder w-100" onClick={()=>handelButton()}>
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
            </div>
            </div>
            }

          </div>
        </div>
      </section>
      <Mission/>
    </>
  );
}
