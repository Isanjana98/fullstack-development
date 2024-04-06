import React from "react";
import "./addDevice.css";
//import { axios } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import toast from "react-hot-toast";
import axios from 'axios';

const AddDevice = () => {

  const devices = {
    serialNumber: "",
    type: "",
    status: "",
    location: "",
  }
  
  const [device, setDevice] = useState(devices); 
  const navigate = useNavigate(); 

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setDevice({...device, [name]:value});
  }
  const submitForm = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/createdevices", device)
    .then((response)=>{
      toast.success(response.data.msg, {position:	"top-right"});
      navigate("/Devices");
    })
    .catch(error => console.log(error))
  }
    return (
      <div className="addDevice">
        <Link to={"/getdevices"}>Back</Link>
        <h3>Add Device</h3>
        <form className="addDeviceForm" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="serialNumber">Serial Number </label>
            <input
              type="text"
              onChange={inputHandler} 
              id="serialNumber"
              name="Serial Number"
              autoComplete="off"
              placeholder="Serial Number"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="device type">Device Type </label>
            <input
              type="text"
              onChange={inputHandler} 
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
            onChange={inputHandler} 
            accept=".jpg,.jpeg,.png"
            id="image"
            name="image"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              onChange={inputHandler} 
              id="status"
              name="status"
              autoComplete="off"
              placeholder="Active or Deactive"
            />
          </div>
          
          <div className="inputGroup">
            <button type="submit">ADD Device</button>
          </div>
        </form>
      </div>
    );
  };
// };

export default AddDevice;
