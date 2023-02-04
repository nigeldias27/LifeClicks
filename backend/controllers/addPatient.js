import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";

export const addPatient = async (req, res) => {
  try {
    const patient = Patient.findById(req.body.patientID);
    const doctor = Doctor.findById(req.body.doctorID);
    if (doctor.Patients == undefined) {
      await doctor.updateOne({ Patients: [req.body.doctorID] });
    } else {
      await doctor.updateOne({
        Patients: [...doctor.Patients, req.body.doctorID],
      });
    }
    if (patient.Doctors == undefined) {
      console.log(patient.Doctors);
      var resp = await patient.updateOne({ Doctors: [req.body.patientID] });
      console.log(resp.Doctors);
    } else {
      console.log(patient.Doctors);
      var resp = await patient.updateOne({
        Doctors: [...patient.Doctors, req.body.patientID],
      });
      console.log(resp.Doctors);
    }

    res.send("Yay!");
  } catch (e) {
    console.log("error");
    console.log(e);
    res.send("Noo!");
  }
};
