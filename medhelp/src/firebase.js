import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import React, {useContext} from "react";
import {uploadBytes, getStorage, ref} from "firebase/storage";

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
const storage = getStorage(app);

async function isValid(cnp) {
    try {
        const q = query(
            collection(db, "valid_users"),
            where("CNP", "==", cnp)
        );
        const querySnap = await getDocs(q);
        return (querySnap._snapshot.docs.size !== 0);
    } catch (err) {
        console.log("cannot add user");
    }
}

async function getProgramari(uid) {
    try {
        const q1 = query(
            collection(db, "programari_consultatie"),
            where("uid", "==", uid)
        );
        const q2 = query(
            collection(db, "programari_vaccin"),
            where("uid", "==", uid)
        );
        const querySnap1 = await getDocs(q1);
        const querySnap2 = await getDocs(q2);

        const p1 = querySnap1._snapshot.docs;
        const p2 = querySnap2._snapshot.docs;

        p1.forEach(d => p2.add(d));

        return p2;
    } catch (err) {
        console.log(err);
    }
}

async function getFisiere(cnp) {
    try {
        const q = query(
            collection(db, "fisiere"),
            where("CNP", "==", cnp)
        );
        const querySnap = await getDocs(q);

        //querySnap._snapshot.docs;
    } catch (err) {
        console.log("error");
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

const role = () => {
    const email = auth.currentUser.email;
    if (email.includes('medhelp')) {
        return 'doctor';
    } else {
        return 'pacient';
    }
};

const programare = async (data, ora, motiv, vaccin, tipVaccin) => {
    if(vaccin) {
        try {
            const user = auth.currentUser;
            await addDoc(collection(db, "programari_vaccin"), {
                uid: user.uid,
                data,
                ora,
                motiv,
                tipVaccin
            });
            window.location.href='/';
            alert("programare efectuata cu succes");
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }else {
        try {
            const user = auth.currentUser;
            await addDoc(collection(db, "programari_consultatie"), {
                uid: user.uid,
                data,
                ora,
                motiv,
            });
            window.location.href='/';
            alert("programare efectuata cu succes");
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }
};

const cerere = async (tipCerere, motiv) => {
    try {
        const user = auth.currentUser;
        await addDoc(collection(db, "cereri"), {
            uid: user.uid,
            tipCerere,
            motiv
        });
        window.location.href = '/';
        alert("cerere efectuata cu succes");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const incarca = async (cnp, file) => {
    if(file !== '') {
        alert(file.name);
    const sref = ref(storage, '/files/' + file.name);
    const name = file.name;
    try {
        const user = auth.currentUser;
        await addDoc(collection(db, "fisiere"), {
            uid: user.uid,
            cnp,
            fisier: name
        });
        await uploadBytes(sref, file);
        window.location.href = '/';
        alert("fișier încărcat cu succes");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }}
};

export {
    auth,
    db,
    app,
    storage,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    role,
    programare,
    cerere,
    incarca,
    getProgramari
};