import mongoose from "mongoose";

const PharmacySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_no: { type: String, required: true },
    dob: { type: String },
    Pharmacy: {
      name: { type: String },
      locality: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", PharmacySchema);
export default User;
