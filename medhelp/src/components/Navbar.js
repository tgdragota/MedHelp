import "./Navbar.css";
import React, {useEffect, Component, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {logout, role} from "../firebase";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [pacient, setPacient] = useState(false);
    const [doctor, setDoctor] = useState(false);

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            setLoggedIn(!!user);
            if(loggedIn) {
                setPacient((role() === "pacient"));
                setDoctor((role() === "doctor"));
            }
        });
    }, [auth, loggedIn]);

        return (<>
            <nav className='navbar'>
                <Link className='navbar-logo' to='/'>
                    <img src="/medhelp.png" alt="Image not found" width={100}/>
                </Link>
                <div>
                    <ul id="navbar" className={clicked ? "#navbar active": "#navbar"}>
                        <li><Link to='/'>ACASĂ</Link></li>
                        {loggedIn && pacient && <li><Link to='/programare'>PROGRAMARE</Link></li>}
                        {loggedIn && pacient && <li><Link to='/documente'>DOCUMENTE</Link></li>}
                        {loggedIn && doctor && <li><Link to='/fisiere'>FIȘIERE</Link></li>}
                        {(!loggedIn) && <li className='nav-item'><Link to='/cont' className='nav-links' >Contul meu <i className="fa fa-user"/></Link></li>}
                        {loggedIn && <li className='nav-item'><Link to='/' className='nav-links' onClick={logout}>Ieșire din cont <i className="fa fa-sign-out" aria-hidden="true"/></Link></li>}
                    </ul>
                </div>
                <div id="mobile" onClick={() => {setClicked(!clicked);}}>
                    <i id="bar" className={clicked ? 'fa fa-times': 'fa fa-bars'}></i>
                </div>
            </nav>
        </>);
}

export default Navbar;
