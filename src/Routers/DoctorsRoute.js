import * as doctorsController from '../Controllers/doctorsController.js';
import express from 'express'

const router = express.Router();


router.get('/api/get-doctors-count' , doctorsController.getDoctorsCount);
router.get('/api/doctors-list' , doctorsController.getDoctorsList);
router.post('/api/add-doctor' , doctorsController.setDocotsData);

export default router;