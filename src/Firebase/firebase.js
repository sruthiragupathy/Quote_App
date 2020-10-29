import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC_bN6VrKaHIf7X_GAUrvo8j5jCkMvOb-4",
  authDomain: "clone-7a9d7.firebaseapp.com",
  databaseURL: "https://clone-7a9d7.firebaseio.com",
  projectId: "clone-7a9d7",
  storageBucket: "clone-7a9d7.appspot.com",
  messagingSenderId: "481326755036",
  appId: "1:481326755036:web:49952aa14ad6205f175819",
  measurementId: "G-XH0K4Q7GFY"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

// const userRef = firestore.doc(`users/${user.uid}`);
// const snapshot = await userRef.get();

export const generateUserDocument = async(user,additionalData) =>{
  if(!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {email,displayName,photoURL} = user;
    try{
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      }
      )
    }
    catch(error){
      console.log("Error creating user document",error);
    }

  
}
return getUserDocument(user.uid)
}

const getUserDocument = async uid =>{
  if(!uid) return null;
  try{
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  }
  catch (error) {
    console.error("Error fetching user", error);
  }
}





