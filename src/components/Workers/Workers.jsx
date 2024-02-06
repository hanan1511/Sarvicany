import React, { useState } from "react";
import Style from "./Workers.module.css";
const data = [
  {
    id: "ba8bb471-482c-438d-8de4-519b88337f9b",
    firstName: "hanan",
    lastName: "hossam",
    email: "hanan@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Friday",
        slots: [
          {
            startTime: "17:00:00",
            endTime: "18:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "WORKER",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Friday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "WORKER",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Friday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "WORKER",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Friday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "WORKER",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Friday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
          {
            startTime: "20:00:00",
            endTime: "21:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "WORKER",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Friday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "Friday",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Friday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "Tuesday",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Tuesday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "Wednesday",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Wednesday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "Saturday",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Saturday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "Sunday",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Sunday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
  {
    id: "ce5e4de8-b7e5-4035-a825-4ef82824fb15",
    firstName: "Monday",
    lastName: "WORKER",
    email: "eslamelmoataz7@gmail.com",
    availabilities: [
      {
        dayOfWeek: "Monday",
        slots: [
          {
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
          {
            startTime: "16:00:00",
            endTime: "17:00:00",
          },
          {
            startTime: "15:00:00",
            endTime: "16:00:00",
          },
          {
            startTime: "13:00:00",
            endTime: "14:00:00",
          },
        ],
      },
    ],
  },
];

const Employees = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [filteredWorkers, setFilteredWorkers] = useState([]);

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

  const filterWorkers = (dayOfWeek, timeSlot) => {
    let filteredData = data;

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
  return (
    <>
      <section className={`p-5 ${Style.services} `}>
        <div className="container bg-white p-5 rounded-2">
          <div className="row g-4">
            <div className="col-md-12 mb-3">
              <div>
                <h2>
                  <span className="fw-bolder">Workers</span> of Home Maintenance
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
                                className=" d-flex  justify-content-between bg-body-tertiary mb-2 p-2 rounded-2"
                                key={index}
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
                    <button className="btn bg-black text-white fw-bolder text-center w-100 position-relative ">
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
