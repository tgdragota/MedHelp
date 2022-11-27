import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import React, {useContext} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDrmWTc1k2nQCakjGPDJsT2rjvNPfpM6cA",
    authDomain: "medhelp-e2d91.firebaseapp.com",
    projectId: "medhelp-e2d91",
    storageBucket: "medhelp-e2d91.appspot.com",
    messagingSenderId: "434601253553",
    appId: "1:434601253553:web:fc20370f547b9560bfe090"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function isValid(cnp) {
    try {
        const q = query(
            collection(db, "valid_users"),
            where("CNP", "==", cnp)
        );
        const querySnap = await getDocs(q);
        console.log("size " + querySnap._snapshot.docs.size);
        return (querySnap._snapshot.docs.size !== 0);
    } catch (err) {
        console.log("cannot add user");
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password, cnp) => {
    try {
        let valid1 = (!email.includes('medhelp'));
        let valid2 = await isValid(cnp);
        console.log("valid " + valid2);
        if(valid1 && valid2) {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name,
                email,
                cnp,
                rol: "pacient"
            });
        }
        else {
            if(!valid1)
                alert("email invalid");
            if(!valid2)
                alert("CNP invalid. Contactați doctorul de familie pentru crearea contului. ")
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
};