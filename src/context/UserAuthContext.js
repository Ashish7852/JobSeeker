import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber

} from 'firebase/auth';
import {auth} from '../firebase';


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");

    function signUp(email, password) {
        console.log("Email", email);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function signin(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut(){
        return signOut(auth);
    }

    function googleSignIn(){
        const googleAuthPlrovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthPlrovider);
    }

    function setUpRecaptcha(number){
      const recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha- container',
       {},
        auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
        
    }

      useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
      }, []);

    return <userAuthContext.Provider value={{user, signUp, signin, logOut, googleSignIn, setUpRecaptcha}}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext);
}