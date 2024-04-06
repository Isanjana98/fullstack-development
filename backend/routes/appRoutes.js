import { Router } from "express";
const router = Router();
import { createLocation, getLocations, getLocationById, updateLocation, deleteLocation } from "../controller/locationController.js";
import { createDevice, getDevices, getDeviceById, updateDevice, deleteDevice } from "../controller/deviceController.js";

router.post("/createlocations", createLocation);
router.get("/getlocations", getLocations);
router.get("/getlocations/:id", getLocationById);
router.put("/updatelocations/:id", updateLocation);
router.delete("/deletelocations/:id", deleteLocation);

router.post("/createdevices", createDevice);
router.get("/getdevices", getDevices);
router.get("/getdevices/:id", getDeviceById);
router.put("/updatedevices/:id", updateDevice);
router.delete("/deletedevices/:id", deleteDevice);

export default router;