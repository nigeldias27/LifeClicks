import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    Name: {
      required: true,
      type: String,
    },
    Age: {
      required: true,
      type: String,
    },
    Phone_no: {
      type: String,
    },
    Email: {
      type: String,
    },
    Password: {
      type: String,
    },
    profileURL: {
      type: String,
    },
    Speciality: { type: String },
    role: {
      type: String,
    },
    Patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
      },
    ],
    Bio: { type: String },
  },
  { timestamps: true }
);
export default mongoose.model("Doctor", dataSchema);
//module.exports = mongoose.model('User', dataSchema)
