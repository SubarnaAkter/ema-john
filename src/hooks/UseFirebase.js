import { GoogleAuthProvider , getAuth, signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/firebase.init";

initAuthentication();
const useFirebase=()=>{
    const [user, setUser]=useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    

    const signInWithGoogle=()=>{
      return  signInWithPopup(auth, provider);
       
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    },[])

    return{
        user,
        signInWithGoogle,
        logOut,
    }
    
}
export default useFirebase;