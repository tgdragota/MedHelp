import './Programare.css';
import {useState} from "react";
import {logInWithEmailAndPassword, programare} from "../firebase";

function Programare() {

    const [data, setData] = useState("");
    const [ora, setOra] = useState("");
    const [motiv, setMotiv] = useState("");
    const [vaccin, setVaccin] = useState(false);
    const [tipVaccin, setTipVaccin] = useState("");

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="prog-viz">
                        <form className="prog-form">
                            <h2 className="title">Programare</h2><br />
                            <div className="select-form">
                                <input type="radio" id="consultatie" name="tip" value="consultatie" defaultChecked="true"
                                       onChange={() => {
                                           setVaccin(false);
                                           const div = document.querySelector("#custom");
                                           div.setAttribute('class', '');
                                       }}/>
                                <label htmlFor="consultatie">Consultație</label>
                                <input type="radio" id="vaccinare" name="tip" value="vaccinare"
                                       onChange={() => {
                                           setVaccin(true);
                                           const div = document.querySelector("#custom");
                                           div.setAttribute('class', 'drop-down-list');
                                       }}/>
                                <label htmlFor="vaccinare">Vaccin</label>
                            </div>
                            <br />
                            <div className="input-field">
                                <i className="fa fa-calendar"></i>
                                <input type="date" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-clock"></i>
                                <input type="time" placeholder="Ora" value={ora} onChange={(e) => setOra(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fa fa-pencil" ></i>
                                <input type="text" placeholder="" value={motiv} onChange={(e) => setMotiv(e.target.value)} />
                            </div>
                            <select className="" name="cars" id="custom" hidden value={tipVaccin} onChange={(e) => setTipVaccin(e.target.value)}>
                                <option defaultValue="Selectați" hidden="true">Selectați</option>
                                <option value="vaccin1">vaccin1</option>
                                <option value="vaccin2">vaccin2</option>
                            </select>
                            <input readOnly value="Programează" className="btn solid" id="submit" onClick={() => programare(data, ora, motiv, vaccin, tipVaccin)}/>
                        </form>
                        <form action="#" className="viz-form">
                            <h2 className="title">Vizualizare programări consultații</h2><br />
                            <div>
                                <table>
                                    <thead>
                                    <th>Data</th>
                                    <th>Ora</th>
                                    <th>Tip</th>
                                    </thead>
                                    <tbody id="tbody1"></tbody>
                                </table>
                            </div>
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