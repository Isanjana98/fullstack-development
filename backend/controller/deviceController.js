import Device from "../model/device.model.js";

export const createDevice  = async (req, res) => {
  try {
    const device = new Device(req.body);
    await device.save();
    res.status(201).json(device);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

export const getDevices = async(req, res) => {
  try {
    const devices = await Device.find();
    if(!devices){
      return res.status(404).json({msg:"No Devices found"});
    }
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: error});
  }
}

export const getDeviceById = async (req, res) => {
  try {
    const id = req.params.id;
    const deviceExist = await Device.findById(id);
    if (!deviceExist) {
      return res.status(404).json({ msg: 'Device not found' });
    }
    res.status(200).json(deviceExist);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const updateDevice = async  (req, res) =>{
  try {
    const id = req.params.id;
    const deviceExist = await Device.findById(id);
    if(!deviceExist){
      return res.status(401).json({msg:'The ID does not exist.'});
    }
    const updateDevice = await Device.findByIdAndUpdate(id, req.body ,{new:true}) ;
    res.status(200).json(updateDevice);
  } catch (error) {
    res.status(500).json({ error: error});
  }
}

export const deleteDevice = async (req, res) => {
  try {
    const id = req.params.id;
    const deviceExist = await Device.findById(id);
    if(!deviceExist){
        return res.status(404).json('No device with this id was found');
    }
    await Device.findByIdAndDelete(id);
    res.status(200).json({ msg: "Device deleted" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}