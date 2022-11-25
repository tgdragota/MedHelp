import "./Navbar.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    state={clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (<>
            <nav className='navbar'>
                <Link className='navbar-logo' to='/'>
                    <img src="/medhelp.png" alt="Image not found" width={100}/>
                </Link>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active": "#navbar"}>
                        <li>
                            <Link to='/'>
                                ACASĂ
                            </Link>
                        </li>
                        <li>
                            <Link to='/programare'>
                                PROGRAMARE
                            </Link>
                        </li>
                        <li>
                            <Link to='/documente'>
                                DOCUMENTE
                            </Link>
                        </li>
                        <li>
                            <Link to='/fisiere'>
                                FIȘIERE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cont' className='nav-links' >
                                Contul meu <i className="fa fa-user"/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fa fa-times': 'fa fa-bars'}></i>
                </div>
            </nav>
        </>);
    }
}

export default Navbar;
