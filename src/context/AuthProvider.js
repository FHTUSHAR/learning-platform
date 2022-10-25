import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import app from '../firebase/firebase.config'



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    const createGoogleUser = () => {
        return signInWithPopup(auth, provider)
    }
    const createGithubUser = () => {
        return signInWithPopup(auth, providerGithub)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // setLoading(false)

        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, createGoogleUser, createGithubUser, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;