import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import './Cont.css';

function Cont() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [cnp, setCnp] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-in-form">
                            <h2 className="title">Autentificare</h2>
                            <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Parolă" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <input readOnly value="Intră în cont" className="btn solid" onClick={() => logInWithEmailAndPassword(email, password)} />
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Creare cont</h2>
                            <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="text" placeholder="Nume" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="text" placeholder="Prenume"/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-calendar"></i>
                                <input type="date" placeholder="Data nașteri"/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-phone"></i>
                                <input type="text" placeholder="Telefon"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-id-card"></i>
                                <input type="text" placeholder="CNP" value={cnp} onChange={(e) => setCnp(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-location-dot"></i>
                                <input type="text" placeholder="Județ"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-location-dot"></i>
                                <input type="text" placeholder="Localiate"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-location-dot"></i>
                                <input type="text" placeholder="Stradă"/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-envelope"></i>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Parolă" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Confirmare parolă"/>
                            </div>
                            <input readOnly className="btn" value="Creează" onClick={() => registerWithEmailAndPassword(name, email, password, cnp)}/>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Nu ai cont ?</h3>
                            <p>
                                mesaj daca e nevoie
                            </p>
                            <button className="btn transparent" id="sign-up-btn"
                                    onClick={() => {
                                        const container = document.querySelector(".container");
                                        container.classList.add("sign-up-mode");
                                    }}>
                                Creează cont
                            </button>
                        </div>
                        <img src="/img/medic.svg" className="image" alt=""/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Ai cont ?</h3>
                            <p>
                                mesaj daca e nevoie
                            </p>
                            <button className="btn transparent" id="sign-in-btn"
                                    onClick={() => {
                                        const container = document.querySelector(".container");
                                        container.classList.remove("sign-up-mode");
                                    }}>
                                Autentificare
                            </button>
                        </div>
                        <img src="/img/consultatie.svg" className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cont;