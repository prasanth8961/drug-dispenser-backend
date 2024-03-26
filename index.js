import express from "express";
import cors from "cors";
import ProductsRoute from "./src/Routers/MedicinesRoute.js";
import authRoute from "./src/Routers/AuthRouter.js";
import smsRoute from "./src/Routers/SMSroutes.js"
import PrescriptionRoute from "./src/Routers/PrescriptionRouter.js"
import PatientRoute from "./src/Routers/PatientsRoute.js"
import doctorsRoute from "./src/Routers/DoctorsRoute.js"

const app = express();
const PORT = 7000;

app.use(express.json());
app.use(cors());
app.use(ProductsRoute);
app.use(authRoute);
app.use(smsRoute);
app.use(PrescriptionRoute);
app.use(PatientRoute);
app.use(doctorsRoute);


app.get("/", (req, res) => {
  res.send({ version: `0.0.1` });
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
