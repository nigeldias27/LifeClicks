import Doctor from "../models/Doctor";
import Patient from "../models/Patient";
import Pharma from "../models/Pharma";

export const login = async (req, res) => {
  try {
    const patient = await Patient.findOne({ Email: req.body.email });
    const doctor = await Doctor.findOne({ Email: req.body.email });
    const pharma = await Pharma.findOne({ Email: req.body.email });
    if (patient != null) {
      if (patient.Password == req.body.password) {
        res.json(patient);
      }
    }
    if (doctor != null) {
      if (doctor.Password == req.body.password) {
        res.json(doctor);
      }
    }
    if (pharma != null) {
      if (patient.Password == req.body.password) {
        res.json(doctor);
      }
    } else {
      res.send("Invalid credentials");
    }
  } catch (e) {
    console.log(e);
    console.log(e.message);
  }
};

export const signUp = async (req, res) => {
  try {
    var data;
    if (req.body.role == "Patient") {
      data = new Patient(req.body);
    } else if (req.body.role == "Doctor") {
      data = new Doctor(req.body);
    } else {
      data = new Pharma(req.body);
    }
    const savingData = await data.save();
    res.status(200).json(savingData);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(e);
    console.log(e.message);
  }
};
