import "./Navbar.css";
import React, {useEffect, Component, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {auth} from "../firebase";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    let user = auth.currentUser;
    if(user) user=user.uid;

    auth.onAuthStateChanged(() => {
        setLoggedIn(!loggedIn);
    });


        return (<>
            <nav className='navbar'>
                <Link className='navbar-logo' to='/'>
                    <img src="/medhelp.png" alt="Image not found" width={100}/>
                </Link>
                <div>
                    <ul id="navbar" className={clicked ? "#navbar active": "#navbar"}>
                        <li><Link to='/'>ACASĂ</Link></li>
                        {user && <li><Link to='/programare'>PROGRAMARE</Link></li>}
                        {user && <li><Link to='/documente'>DOCUMENTE</Link></li>}
                        {user && <li><Link to='/fisiere'>FIȘIERE</Link></li>}
                        <li className='nav-item'><Link to='/cont' className='nav-links' >Contul meu <i className="fa fa-user"/></Link></li>
                    </ul>
                </div>
                <div id="mobile" onClick={() => {setClicked(!clicked);}}>
                    <i id="bar" className={clicked ? 'fa fa-times': 'fa fa-bars'}></i>
                </div>
            </nav>
        </>);
}

export default Navbar;
