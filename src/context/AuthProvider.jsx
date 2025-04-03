import React, { createContext, useContext } from 'react'
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, set, ref } from "firebase/database";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const appAuth = getAuth(app)

export const useAuth = ()=>useContext(AuthContext)

const AuthContext = createContext()

const AuthProvider = ({children}) => {

  function registerUser(email,password){
    return createUserWithEmailAndPassword(appAuth,email,password)
  }

  function loginUser(email,password){
    return signInWithEmailAndPassword(appAuth,email,password)
  }

  function putData(key,data){
    set(ref(database,key),data)
  }

  async function logout(){
    await signOut(appAuth)
  }

  return (
    <AuthContext.Provider value={{registerUser,putData,loginUser,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider