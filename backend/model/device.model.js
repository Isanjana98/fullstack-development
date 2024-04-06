import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  // location: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Location",
  //   required: true
  // },
},
// {timestamps: true}
);

export default mongoose.model("Device", DeviceSchema);