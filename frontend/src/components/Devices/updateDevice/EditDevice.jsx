import React, { useEffect, useState } from 'react';
import  { Link, useNavigate } from 'react-router-dom'
import "../addDevice/addDevice.css"
import axios from 'axios';
import toast from "react-hot-toast";

function EditDevices() {

  const devices = {
    serialNumber: "",
    type: "" ,
    image: null,
    status: "",
  }


  const [device,setDevice] = useState();
  const navigate = useNavigate(); 

  const inputChangeHandler = (e) =>{
    setDevice({...devices,[e.target.name]: e.target.value});
    console.log(device);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/updatedevices/$(id)')
    .then((response) => {
      toast.success(response.data.msg, {position:	"top-right"});
      navigate("/Devices");
    })
    .catch((error) =>  {
      console.log("Error");
    })
  }  )

  return (
    <div className="addUser">
        <Link to={"/getDevices"}>Back</Link>
        <h3>Update Device</h3>
        <form className="addUserForm">
        <div className="inputGroup">
            <label htmlFor="serialNumber">Serial Number </label>
            <input
              type="text"
              onChange={inputChangeHandler}
              id="serialNumber"
              name="Serial Number"
              autoComplete="off"
              placeholder="Serial Number"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="type">Device Type </label>
            <input
              type="text"
              onChange={inputChangeHandler}
              id="type"
              name="devicetype"
              autoComplete="off"
              placeholder="Device Type"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="image">Image</label>
            <input
            type="file"
            onChange={inputChangeHandler}
            accept=".jpg,.jpeg,.png"
            id="image"
            name="image"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              onChange={inputChangeHandler}
              id="status"
              name="status"
              autoComplete="off"
              placeholder="Active or Deactive"
            />
          </div>
          <div className="inputGroup">
            <button type="submit">Update Device</button>
          </div>
        </form>
      </div>
  )
}

export default EditDevices