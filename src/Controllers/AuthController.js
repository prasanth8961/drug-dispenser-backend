import { firebase } from "../Services/Firebase.js";

const auth = firebase.auth();

export const signUp = async (req, res) => {
  try {
    if(req.body.email === "" || req.body.password === "") return  res.send({error : 'error'});
    const userRecord = await auth.createUser({
      email: req.body.email,
      password: req.body.password,
    });
    return res.send({ message: userRecord.uid });
  } catch (error) {
    return res.send({ message: `Error while creating user` });
  }
};

export const signIn = async (req, res) => {
  try {
    const userRecord = await firebase.auth().getUserByEmail(req.body.email);
    if (!userRecord) throw new Error("user not found");
    return res.send({
      message: { userId: userRecord.uid, email: userRecord.email },
    });
  } catch (error) {
    return res.send({ error: `Error while login user ${error}` });
  }
};
