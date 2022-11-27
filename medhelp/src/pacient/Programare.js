import './Programare.css';

function Programare() {

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="prog-viz">
                        <form action="#" className="prog-form">
                            <h2 className="title">Programare</h2><br />
                            <div className="select-form">
                                <input type="radio" id="consultatie" name="tip" value="consultatie" defaultChecked="true"
                                       onChange={() => {
                                           const div = document.querySelector("#custom");
                                           div.setAttribute('class', '');
                                       }}/>
                                <label htmlFor="consultatie">Consultație</label>
                                <input type="radio" id="vaccinare" name="tip" value="vaccinare"
                                       onChange={() => {
                                           const div = document.querySelector("#custom");
                                           div.setAttribute('class', 'drop-down-list');
                                       }}/>
                                <label htmlFor="vaccinare">Vaccin</label>
                            </div>
                            <br />
                            <div className="input-field">
                                <i className="fa fa-calendar"></i>
                                <input type="date" placeholder="Data"/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-clock"></i>
                                <input type="time" placeholder="Ora"/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-pencil" ></i>
                                <input type="text" placeholder="" id="custom-input" />
                            </div>
                            <select className="" name="cars" id="custom" hidden >
                                <option defaultValue="Selectați" hidden="true">Selectați</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <input type="submit" value="Programează" className="btn solid" id="submit"/>
                        </form>
                        <form action="#" className="viz-form">
                            <h2 className="title">Vizualizare programări consultați</h2>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Vizualizare programări</h3><br/>
                            <button className="btn transparent" id="vizualizare"
                                    onClick={() => {
                                        const container = document.querySelector(".container");
                                        container.classList.add("viz-mode");
                                    }}>
                                Vizualizează
                            </button>
                        </div>
                        <img src="/img/programare.svg" className="image" alt=""/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Programează o consultație</h3><br/>
                            <button className="btn transparent" id="programare"
                                    onClick={() => {
                                        const container = document.querySelector(".container");
                                        container.classList.remove("viz-mode");
                                    }}>
                                Programează
                            </button>
                        </div>
                        <img src="/img/creareProgramare.svg" className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Programare;