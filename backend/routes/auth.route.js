import express from "express";
import { addPatient } from "../controllers/addPatient.js";
import { login, signUp } from "../controllers/auth.controller.js";

const router = express.Router();
//http://localhost:4000/api/newrole

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/addPatient", addPatient);
module.exports = router;
