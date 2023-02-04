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
    role: {
      type: String,
    },
    FamilyCaseHistory: {
      type: String,
    },
    Chronic_Disease: {
      type: String,
    },
    Allergies: {
      type: String,
    },

    //reports: [],
    medicalInfo: [
      {
        Title: { type: String, required: true },
        Doctor: { type: String, required: true },
        Date: { type: String },
        Description: { type: String },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("User", dataSchema);
//module.exports = mongoose.model('User', dataSchema)
