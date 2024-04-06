import React from 'react'
import  { Link } from 'react-router-dom'
import "../addLocation/addLocation.css"

function EditLocation() {
  return (
    <div className='addUser'>
        <Link  to={"/"}>Back</Link>
        <h3>Update Location</h3>
        <form className='addUserForm'>
          <div className="inputGroup">
            <label htmlFor="Lname">Location Name</label>
            <input type="text" id="fname" name="LocationName" autoComplete='off' placeholder='Location name'/>
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address </label>
            <input type="text" id="address" name="address" autoComplete='off' placeholder='Address'/>
          </div>
          <div className="inputGroup">
            <label htmlFor="phone">Phone: </label>
            <input type="phone" id="phone" name="phone" autoComplete='off' placeholder='+94 70 456 789'/>
          </div>
          <div className="inputGroup">
            <button type="submit">Update Location</button>
          </div>
        </form>
    </div>
  )
}

export default EditLocation