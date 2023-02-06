import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    Name_of_Medicine: {
      required: true,
      type: String,
    },
    Quantity: {
      required: true,
      type: String,
    },
    Date: {
      type: String,
    },
    Email: {
      type: String,
    },
    Description: {
      type: String,
    },
    DoctorName: { type: String },
    Doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    Patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Prescription", dataSchema);
