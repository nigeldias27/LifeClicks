import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";
import Prescription from "../models/Prescription.js";

export const loadSinglePatient = async (req, res) => {
  console.log(req.body.id);
  const patient = await Patient.findById(req.body.id);
  console.log(patient);
  res.json(patient);
};

export const updateMedicalInfo = async (req, res) => {
  const patient = await Patient.findById(req.body.id);
  var resp = await patient.updateOne({
    medicalInfo: [...patient.medicalInfo, req.body.data],
  });
  res.send("Yay");
};

export const addPrescription = async (req, res) => {
  console.log(req.body);
  const prescription = Prescription({
    Name_of_Medicine: req.body.Name_of_Medicine,
    Doctor: req.body.Doctor,
    DoctorName: req.body.DoctorName,
    Quantity: req.body.Quantity,
    Description: req.body.Description,
  });
  const sent = await prescription.save();
  const patient = await Patient.findById(req.body.id);
  if (patient.Prescription == undefined) {
    var resp = await patient.updateOne({ Prescription: [prescription._id] });
    console.log(resp.Prescription);
  } else {
    console.log(patient.Prescription);
    var resp = await patient.updateOne({
      Prescription: [...patient.Prescription, prescription._id],
    });
  }
  res.send("Yay");
};
