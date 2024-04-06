import React, { useEffect } from 'react'
import "./device.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const Device = () => {
    const [devices, setDevice] = React.useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/getdevices");
            setDevice(response.data);
        };
        fetchData();
    }, [])

    const deleteDevice = async(deviceID) => {
        await axios.delete(`http://localhost:8000/api/deletedevices/${deviceID}`)
            .then((response)=>{
                setDevice((prevDevice) => prevDevice.filter((device) => device._id !== deviceID))
                toast.success(response.data.msg, {position:	"top-right"});
            })
        }
  return (
    <>
    <div> <Link to={"/"} className='addButton2'>Location List</Link>
    <Link to={"/getdevices"} className='addButton1'>Devices List</Link>
    </div>
    <div className='userTable'>
        <Link to={"/adddevice"} className='addButton'>Add Devices</Link>
        <table border={1} cellPadding={10} cellSpacing={1}>
            <thead>
                <tr>
                <th>Index</th>
                    <th>Device ID</th>
                    <th>Device Type</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {devices.map((device, index) => {
                    return (
                        <tr key={device._id}>
                    <td>{index + 1}</td>
                        <td>{device.serialNumber}</td>
                        <td>{device.type}</td>
                        <td><img src={device.image} alt={device.serialNumber}/></td>
                        <td>{device.status}</td>
                        <td className='actionButton'>
                            <button onClick={()=> deleteDevice(device._id)}><i className="fa-solid fa-trash"></i></button>
                            <Link to={'/editdevices/'+device._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                        </td>
                    </tr>
                    );
                })}
                
            </tbody>
        </table>
    </div></>
  )
}

export default Device