import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";

export const addPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.body.patientID);
    const doctor = await Doctor.findById(req.body.doctorID);
    if (doctor.Patients == undefined) {
      await doctor.updateOne({ Patients: [req.body.patientID] });
    } else {
      await doctor.updateOne({
        Patients: [...doctor.Patients, req.body.patientID],
      });
    }

    if (patient.Doctors == undefined) {
      console.log(patient.Doctors);
      var resp = await patient.updateOne({ Doctors: [req.body.doctorID] });
      console.log(resp.Doctors);
    } else {
      console.log(patient.Doctors);
      var resp = await patient.updateOne({
        Doctors: [...patient.Doctors, req.body.doctorID],
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
