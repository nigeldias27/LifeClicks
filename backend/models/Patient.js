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
    Doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],
    Email: {
      type: String,
    },
    Password: {
      type: String,
    },
    profileURL: {
      type: String,
    },
    role: {
      type: String,
    },
    reports: [],
    medicalInfo: [],
  },
  { timestamps: true }
);
export default mongoose.model("Patient", dataSchema);
//module.exports = mongoose.model('User', dataSchema)
