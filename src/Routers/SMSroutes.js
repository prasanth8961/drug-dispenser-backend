import express from "express";
import * as SMScontroller from "../Controllers/SMScontroller.js";


const router = express.Router();

router.post('/api/sendOTP' , SMScontroller.sendOTP);

export default  router;