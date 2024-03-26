import { firebase } from "../Services/Firebase.js";

const fireStoreDB = firebase.firestore();

export const uploadMedication= async (req , res) => {
  try {
      await fireStoreDB.collection('medications').doc(req.body.value).set(req.body.medication);
      return res.send({message : `Medicine Data successfully added..`});
  } catch (error) {
     return res.send({error : `Upload Failed`});
  }
};

export const retrieveMedicationData = async (req , res) => {
  const medicationSnapshot = await fireStoreDB.collection('medications').get();
  const medicationOptions = [];

  medicationSnapshot.forEach((doc) => {
    const medication = doc.data();
    medicationOptions.push({
      value: medication.value,
      label: medication.label
    });
  });
  return res.send({message : medicationOptions});
};

export const availableMedicinesCount = async (req , res )=>{
  const collectionRef = fireStoreDB.collection('medications');
  collectionRef.get().then((snapshot)=>{
    return res.send({count : snapshot.size});
  }).catch((error)=>{
    return res.send({error : `error is : ${error}`});
  })
}

