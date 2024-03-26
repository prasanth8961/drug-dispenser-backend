import { firebase } from "../Services/Firebase.js";

//const db = firebase.firestore();
// export const sendPrescription = async (req, res) => {
//   try {
//     const collectionRef = db.collection("Prescriptions");
//     await collectionRef.doc().set({ prescriptions: req.body.data });
//     return res.send({ message: "Successfully added prescription" });
//   } catch (error) {
//     console.error("Error sending prescription:", error);
//     return res.status(500).send({ message: `Internal server error: ${error}` });
//   }
// };

const db = firebase.database();

export const sendPrescription = async (req, res) => {
  try {
    const otp = req.body.otp;
    await db.ref("/prescriptions").child(otp).set(req.body.data);
    return res.send({ message: "Successfully added prescription" });
  } catch (error) {
    console.error("Error sending prescription:", error);
    return res.status(500).send({ message: `Internal server error: ${error}` });
  }
};
