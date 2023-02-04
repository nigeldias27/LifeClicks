import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";

export const LoadDoctor = async (req, res) => {
  const l = [];
  const patient = await Patient.findById(req.body.id);

  for (let index = 0; index < patient.Doctors.length; index++) {
    const element = patient.Doctors[index];
    const individual_patient = await Doctor.findById(element);
    l.push(individual_patient);
  }
  res.json(l);
};
