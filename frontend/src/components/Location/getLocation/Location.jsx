import React, { useEffect } from "react";
import "./location.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Location = () => {
  const [locations, setLocations] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getlocations");
      setLocations(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        {" "}
        <Link to={"/"} className="addButton2">
          Location List
        </Link>
        <Link to={"/getdevices"} className="addButton1">
          Devices List
        </Link>
      </div>
      <div className="userTable">
        <Link to={"/addLocation"} className="addButton">
          Add Location
        </Link>
        <table border={1} cellPadding={10} cellSpacing={1}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Location Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Devices</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{location.locationname}</td>
                  <td>{location.address}</td>
                  <td>{location.phone}</td>
                  <td>{location.devices}</td>
                  <td className="actionButton">
                    <button>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <Link to={"/editlocation"}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Location;
