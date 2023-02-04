import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";

export const LoadPatient = async (req, res) => {
  try {
    var l = [];
    const doc = await Doctor.findById(req.body.id);
    console.log(doc);
    for (let index = 0; index < doc.Patients.length; index++) {
      const element = doc.Patients[index];
      const individual_patient = await Patient.findById(element);
      l.push(individual_patient);
    }
    console.log(l);
    res.json(l);
  } catch (e) {
    console.log(e);
    console.log();
    res.send(e.message);
  }
};
