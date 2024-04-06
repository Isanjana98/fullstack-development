import React from "react";
import "./addLocation.css";
import { Link } from "react-router-dom";
//import { axios} from "react";
import { useState } from "react";
import axios from 'axios';

const AddLocation = () => {

  const locations = {
    locationname: "",
    address: "",
    phone: "",
    //devices: "",
  }
  
  const [location, setLocation] = useState(locations);
  
  const inputHandler = (e) => {
    const {name, value} = e.target;
    setLocation({...location, [name]: value});
  }
  const submitForm = async(e) => {
    e.preventDefault();
    await axios.post("https://localhost:8000/api/createlocations", location)
    .then((response)=>{
      console.log(response)
    }).catch(error => console.log(error))
  }
    return (
      <div className="addLocation">
        <Link to={"/"}>Back</Link>
        <h3>Add Location</h3>
        <form className="addLocationForm" onSubmit={submitForm}>
        <div className="inputGroup">
            <label htmlFor="name">Location Name</label>
            <input type="text" id="locationname" name="LocationName" autoComplete='off' placeholder='Location name'/>
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address </label>
            <input type="text" onChange={inputHandler} id="address" name="address" autoComplete='off' placeholder='Address'/>
          </div>
          <div className="inputGroup">
            <label htmlFor="phone">Phone </label>
            <input type="text" onChange={inputHandler} id="phone" name="phone" autoComplete='off' placeholder='+94 70 456 789'/>
          </div>
          {/* <div className="inputGroup">
            <label htmlFor="devices">Device Name </label>
            <input type="text" onChange={inputHandler} id="devices" name="devices" autoComplete='off' placeholder='Device'/>
          </div> */}
          <div className="inputGroup">
            <button type="submit">ADD Location</button>
          </div>
        </form>
      </div>
    );
  };

export default AddLocation;
