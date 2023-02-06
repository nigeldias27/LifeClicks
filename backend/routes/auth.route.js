import express from "express";
import { addPatient } from "../controllers/addPatient.js";
import { login, signUp } from "../controllers/auth.controller.js";
import { LoadDoctor } from "../controllers/loadDoctor.js";
import { LoadPatient } from "../controllers/loadPatient.js";
import {
  addPrescription,
  loadSinglePatient,
  updateMedicalInfo,
} from "../controllers/loadSinglePatient.js";
import {
  loadPrescription,
  readPrescription,
} from "../controllers/readPrescription.js";

const router = express.Router();
//http://localhost:4000/api/newrole

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/addPatient", addPatient);
router.post("/LoadDoctor", LoadDoctor);
router.post("/loadSinglePatient", loadSinglePatient);
router.post("/updateMedicalInfo", updateMedicalInfo);
router.post("/LoadPatient", LoadPatient);
router.post("/addPrescription", addPrescription);
router.post("/readPrescription", readPrescription);
router.post("/loadPrescription", loadPrescription);
module.exports = router;
