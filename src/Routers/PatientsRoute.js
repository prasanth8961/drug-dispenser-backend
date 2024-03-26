import express from "express";
import * as PatientController from "../Controllers/PatientController.js";

const router = express.Router();

router.post("/api/createpatient", PatientController.addPatient);
router.get("/api/getpatients", PatientController.getPatients);
router.get('/api/get-patient-count' , PatientController.patientsCount);

export default router;
