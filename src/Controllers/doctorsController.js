import { firebase } from "../Services/Firebase.js";

const auth = firebase.auth();
const fireStore = firebase.firestore();

export const getDoctorsCount = async (req, res) => {
  await auth
    .listUsers()
    .then((usersRecord) => {
      return res.send({ message: usersRecord.users.length });
    })
    .catch((e) => {
      return res.send({ error: `error is :${e}` });
    });
};

export const getDoctorsList = async (req, res) => {
  try {
    const doctorsList = [];
    const snapshot = await fireStore.collection("doctors").get();
    snapshot.forEach((collection) => {
      doctorsList.push(collection.data());
    });
    return res.send({ doctors: doctorsList });
  } catch (error) {
    return res.send({ error: `Error is : ${error}` });
  }
};

export const setDocotsData = async (req, res) => {
  try {
    const { id, name, email, contact } = req.body;
    const data = {
      id,
      name,
      email,
      contact,
    };
    await fireStore.collection("doctors").doc(req.body.id.toString()).set(data);
    return res.send({ success: true, message: `Data added successfully ` });
  } catch (error) {
    return res.send({ error: `Error is : ${error}` });
  }
};
