import express from 'express'
import * as MedicinesController from '../Controllers/MedicinesController.js';

const router = express.Router();


router.post('/api/addmedicine' , MedicinesController.uploadMedication);
router.get('/api/getmedicines' , MedicinesController.retrieveMedicationData);
router.get('/api/get-medicine-count' , MedicinesController.availableMedicinesCount);


export default router;