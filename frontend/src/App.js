import './App.css';
import {RouterProvider, createBrowserRouter} from  'react-router-dom';
import Location from './components/Location/getLocation/Location'
import AddLocation from './components/Location/addLocation/AddLocation'
import EditLocation from './components/Location/updatelocation/EditLocation'
import AddDevice from './components/Devices/addDevice/AddDevice';
import GetDevice from './components/Devices/getDevice/Device'
import EditDevices from './components/Devices/updateDevice/EditDevice'

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Location/>,
    },
    {
      path:"/addLocation",
      element: <AddLocation/>,
    },
    {
      path:"/editlocation/id/:id",
      element: <EditLocation/>,
    },
    {
      path:"/adddevice",
      element: <AddDevice/>,
    },
    {
      path:"/getdevices",
      element: <GetDevice/>,
    },
    {
      path:"/editdevices",
      element: <EditDevices/>,
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
