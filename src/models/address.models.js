import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    address_line: {
      type: String,
      default: "",
      required: [true, "Please Provide Address Line"],
    },
    city: {
      type: String,
      default: "",
      required: [true, "Please Provide City"],
    },
    pincode: {
      type: String,
      default: "",
      required: [true, "Please Provide PIN code"],
    },
    state: {
      type: String,
      default: "",
      required: [true, "Enter State"],
    },
    country: {
      type: String,
      default: "",
      required: [true, "Provide Country"],
    },
    mobile: {
      type: String,
      default: "",
      rewuired: [true, "Enter Mobile number"],
    },
  },
  { timestamps: true }
);

export const Address = mongoose.model("Address", addressSchema);
