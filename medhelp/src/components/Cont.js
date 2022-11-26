import './Cont.css';

function Cont() {
    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Autentificare</h2>
                            <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Parolă"/>
                            </div>
                            <input type="submit" value="Intră în cont" className="btn solid"/>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Creare cont</h2>
                            <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="text" placeholder="Nume"/>
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
                                <input type="text" placeholder="CNP"/>
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
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Parolă"/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Confirmare parolă"/>
                            </div>
                            <input type="submit" className="btn" value="Crează"/>
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
                                Crează cont
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