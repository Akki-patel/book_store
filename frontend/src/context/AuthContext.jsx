import { createContext, useContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

export const useAuth = () => {
    return useContext(AuthContext);
}
//Auth Provider
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //register
    const registerUser = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login in user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    //sign up with google
    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider);
    }


    const logoutUser = () => {
        return signOut(auth)
    }

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(true);

            if (user) {
                const { email, diplayName, photoURL } = user;
                const userData = {
                    email, username: diplayName, photo: photoURL
                }
            }
        })
        return ()=> unsubscribe();
    }, [])
    const value = {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logoutUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}