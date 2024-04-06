import mongoose, { Schema, model } from "mongoose";

const LocationSchema = new Schema({
  locationname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  devices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Device",
    },
    // {timestamps: true},

    // LocationSchema.virtual(devicelocate), {
    //   ref: 'Device',
    //   localField: '_id',
    //   foreignField: 'location'
    // }
  ],
});
// LocationSchema.set('toObject', {virtuals: true});
// LocationSchema.set('toJSON', {virtuals: true});

export default model("Location", LocationSchema);
// module.exports = mongoose.model("Location", LocationSchema);