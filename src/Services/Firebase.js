import admin from "firebase-admin"
import {serviceAccount} from '../../doctor-panel-6567d-firebase-adminsdk-j0qxy-321c5a94d1.js'
import * as dotenv from 'dotenv'
dotenv.config();

export const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.RTDB_URL
});
