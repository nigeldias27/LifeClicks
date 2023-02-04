import express from "express";
import { addPatient } from "../controllers/addPatient.js";
import { login, signUp } from "../controllers/auth.controller.js";
import { LoadDoctor } from "../controllers/loadDoctor.js";
import { LoadPatient } from "../controllers/loadPatient.js";

const router = express.Router();
//http://localhost:4000/api/newrole

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/addPatient", addPatient);
router.post("/LoadDoctor", LoadDoctor);

router.post("/LoadPatient", LoadPatient);

module.exports = router;
