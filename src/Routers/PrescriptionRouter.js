import express from 'express'
import * as PrescriptionsController from '../Controllers/PrescriptionController.js';

const router = express.Router();


router.post('/api/sendprescriptions' , PrescriptionsController.sendPrescription);


export default router;