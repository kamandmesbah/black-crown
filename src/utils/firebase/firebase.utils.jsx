import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl72xciffWS5dujoGIotS2pqsNY2WU5oE",
  authDomain: "black-crown-db.firebaseapp.com",
  projectId: "black-crown-db",
  storageBucket: "black-crown-db.appspot.com",
  messagingSenderId: "522654447997",
  appId: "1:522654447997:web:4d79d91ae0860b27e53414",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)


export const db = getFirestore(); 
export const createUserDocumentFromAuth = async (userAuth) =>{
  const  userDocRef = doc(db,'users',userAuth.uid);
  const userSnapShot = await getDoc(userDocRef); 
   //if user data not exist 
  if(!userSnapShot.exists()){
    const {displayName , email } = userAuth;
    const createdAt = new Date(); 
    
    try { 
      await setDoc(userDocRef ,{
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log('error creating the user', error.massage)
    }
  }
  //if user data exist 
  return userDocRef;

}