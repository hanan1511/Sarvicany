import React, { useState,useEffect } from "react";
import Style from "./Workers.module.css";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
const Employees = () => {
  let {state} = useLocation();
  console.log(state);
  let customerId="d9bfc562-3f3d-42ba-817b-bc54eff949c6";
  const navigate=useNavigate();
  const[workers,setWorkers]=useState();
  const [order,setOrder]=useState(null);
  async function getWorkers(){
    const response = await axios.get(`https://localhost:7188/api/services/GetAllWorkersForService?serviceId=${state.id}`);
    if(!response.data.isError){
      setWorkers(response.data.payload);
    }
  }
  async function addCart(id,values){
    const response= await axios.post(`https://localhost:7188/api/Customer/addtocart?customerId=${id}`,values);
    if(!response.data.isError){
      console.log("data ",response.data.payload);
      setOrder(response.data.payload);
      navigate('cart',{state:{order:response.data.payload}});
      //alert("the Order Add to the Cart");
    }
  }

  useEffect(()=>{
    if(state.id){
      getWorkers();
    }
  },[state.id])
  
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [clicked,setClicked]=useState(null);
  const handleDayChange = (event) => {
    const selectedDayOfWeek = event.target.value;
    setSelectedDay(selectedDayOfWeek);
    filterWorkers(selectedDayOfWeek, selectedSlot);
  };

  const handleSlotChange = (event) => {
    const selectedTimeSlot = event.target.value;
    setSelectedSlot(selectedTimeSlot);
    filterWorkers(selectedDay, selectedTimeSlot);
  };

  function handelButton(worker){
    if(!selectedDay){
      alert("Must choose suitable day");
    }else if(!clicked){
      alert("Must choose suitable slot")
    }else if(customerId){
      const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

        // Construct the date string in the desired forma
        const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
        return formattedDate;
      };
      // Update the state with the current date
  
      if(!currentDate){
        setCurrentDate(getCurrentDate());
      }
      const values={
        providerId:worker.id,
        serviceId:state.id,
        slotID:clicked,
        requestDay:currentDate,
        problemDescription:state.desc
      }
      addCart(customerId,values);
      //console.log(order);
    }
  }

  const filterWorkers = (dayOfWeek, timeSlot) => {
    let filteredData = workers;

    if (dayOfWeek) {
      filteredData = filteredData.filter((worker) =>
        worker.availabilities.some(
          (availability) => availability.dayOfWeek === dayOfWeek
        )
      );
    }

    if (timeSlot) {
      filteredData = filteredData.filter((worker) =>
        worker.availabilities.some((availability) =>
          availability.slots.some(
            (slot) => slot.startTime <= timeSlot && slot.endTime >= timeSlot
          )
        )
      );
    }

    setFilteredWorkers(filteredData);
  };

  const iconsData = [
    <i class="fa-solid fa-globe"></i>,
    <i class="fa-solid fa-landmark"></i>,
    <i class="fa-regular fa-comment-dots"></i>,
    <i class="fa-solid fa-headphones"></i>,
    <i class="fa-solid fa-truck-fast"></i>,
    <i class="fa-solid fa-credit-card"></i>,
    <i class="fa-solid fa-credit-card"></i>,
    <i class="fa-solid fa-award"></i>,
    <i class="fa-solid fa-hands"></i>,
    <i class="fa-solid fa-hands"></i>,
    <i class="fa-solid fa-medal"></i>,
  ];
  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * iconsData.length);
    return iconsData[randomIndex];
  };
  
  const handleSlotClick = (workerId, slotId) => {
    console.log("Worker ID:", workerId);
    console.log("Slot ID:", slotId);
    setClicked(slotId);
  };
  return (
    <>
      <section className={`p-5 ${Style.services} `}>
        <div className="container bg-white p-5 rounded-2">
          <div className="row g-4">
            <div className="col-md-12 mb-3">
              <div>
                <h2>
                  <span className="fw-bolder">Workers</span> of {state.name}
                </h2>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="dayFilter" className="form-label">
                Filter by Day:
              </label>
              <select
                id="dayFilter"
                className="form-select"
                value={selectedDay || ""}
                onChange={handleDayChange}
                required
              >
                <option value="">Select a Day</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="slotFilter" className="form-label">
                Filter by Time Slot:
              </label>
              <select
                id="slotFilter"
                className="form-select"
                value={selectedSlot || ""}
                onChange={handleSlotChange}
              >
                <option value="">Select a Time Slot</option>
                <option value="07:00:00">7:00 AM</option>
                <option value="08:00:00">8:00 AM</option>
                <option value="09:00:00">9:00 AM</option>
                <option value="10:00:00">10:00 AM</option>
                <option value="11:00:00">11:00 AM</option>
                <option value="12:00:00">12:00 PM</option>
                <option value="13:00:00">1:00 PM</option>
                <option value="14:00:00">2:00 PM</option>
                <option value="15:00:00">3:00 PM</option>
                <option value="16:00:00">4:00 PM</option>
                <option value="17:00:00">5:00 PM</option>
                <option value="18:00:00">6:00 PM</option>
                <option value="19:00:00">7:00 PM</option>
                <option value="20:00:00">8:00 PM</option>
                <option value="21:00:00">9:00 PM</option>
                <option value="22:00:00">10:00 PM</option>
              </select>
            </div>
            {filteredWorkers?.map((worker) => (
              <div className="col-md-4" key={worker?.id}>
                <div className="border-1 border-black border p-3 rounded-2  h-100">
                  <div className="text-center fs-1 mb-4">{getRandomIcon()}</div>
                  <div className="d-flex mb-1">
                    <h5>First name:</h5>
                    <h5>{worker?.firstName}</h5>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <h5>Last name:</h5>
                    <h5>{worker?.lastName}</h5>
                  </div>
                  <div className="d-flex">
                    <h5>Email: </h5>
                    <h5>{worker?.email}</h5>
                  </div>
                  <div>
                    <h5>Slots: </h5>
                    <div className="col-md-12  text-dark p-2 d-flex">
                      {worker?.availabilities?.map((availability) => (
                        <div key={availability?.dayOfWeek}>
                          <h5 className="p-1">
                            Day: {availability?.dayOfWeek}
                          </h5>
                          {availability?.slots?.map((slot, index) => (
                            <div className="col-md-12">
                              <div
                                className={`d-flex  justify-content-between bg-body-tertiary mb-2 p-2 rounded-2 ${clicked === slot.timeSlotID ? Style.clickedSlot : ""}`}
                                key={index} onClick={() => handleSlotClick(worker.id, slot.timeSlotID)}
                              >
                                <div className="p-2 mx-2">
                                  Start Time: {slot?.startTime}
                                </div>
                                <div className="p-2">
                                  End Time: {slot?.endTime}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn bg-black text-white fw-bolder text-center w-100 position-relative " onClick={() => handelButton(worker)}>
                      Hire this worker!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Employees;