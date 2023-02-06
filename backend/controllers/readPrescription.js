import Patient from "../models/Patient.js";
import Prescription from "../models/Prescription.js";

export const readPrescription = async (req, res) => {
  const patient = await Patient.findById(req.body.id);

  var l = [];
  for (let index = 0; index < patient.Prescription.length; index++) {
    const element = patient.Prescription[index];
    const objectPrescription = await Prescription.findById(element);
    l.push(objectPrescription);
  }
  res.json(l);
};

export const loadPrescription = async (req, res) => {
  const prescription = await Prescription.findById(req.body.id);
  const user = await Patient.findById(req.body.oid);
  res.json({ presc: prescription, user: user });
};
