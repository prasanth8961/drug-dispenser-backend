import { firebase } from "../Services/Firebase.js";


const fireStoreDB = firebase.firestore();


export const addPatient = async (req , res)=>{
    try {
        const { name, age, diagnosis, contact } = req.body;
        const profile =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkN9BY5gyMxjAxe5I3SbK0L_EJf8t-TtE4fJwH_JpMKQ&s";
        if (!name || !age || !diagnosis || !contact) {
          return res.status(400).json({ error: 'All fields are required' });
        }
        const patientRef = fireStoreDB.collection('Patients').doc();
        await patientRef.set({
          name,
          age,
          diagnosis,
          contact,
          profile,
        });
        return res.status(201).json({ message: 'Patient created successfully' });
      } catch (error) {
        console.error('Error creating patient:', error);
        return res.status(500).json({ error: 'Something went wrong' });
      }
}

export const getPatients = async (req, res)=>{
  const patients = [];
  try {
    const snapshot = await fireStoreDB.collection('Patients').get();
    snapshot.forEach((doc) => {
      patients.push(doc.data());
    });
    return res.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    return  res.status(500).json({ error: 'Error fetching patients' });
  }
}


export const patientsCount = async (req ,res)=>{
  const collectionRef = fireStoreDB.collection('Patients');
  collectionRef.get().then((snapshot)=>{
    return res.send({count : snapshot.size});
  }).catch(( error )=>{
    return res.send({error : `Error is : ${error}`});
  })
}