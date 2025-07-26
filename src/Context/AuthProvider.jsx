import {React,createContext, useEffect, useState} from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    // observe auth state change

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('Current Value of the current user',currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo={user,createUser,signInUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;