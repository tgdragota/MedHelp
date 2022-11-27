import './Documente.css';
import {useState} from "react";
import {cerere, programare} from "../firebase";

function Documente() {
    const [tipCerere, setTipCerere] = useState("");
    const [motiv, setMotiv] = useState("");

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="viz-cerere">
                        <form className="form-viz">
                            <h1>Vizualizare documete</h1>
                        </form>
                        <form action="#" className="cerere-form">
                            <h2 className="title">Solicită un document</h2>
                            <select className="drop-down-list"  name="cars" value={tipCerere} onChange={(e) => setTipCerere(e.target.value)}>
                                <option defaultValue="Selectați" hidden>Tip cerere</option>
                                <option value="cerere1">cerere1</option>
                                <option value="cerere2">cerere2</option>
                            </select>
                            <div className="input-field">
                                <i className="fa fa-pencil"></i>
                                <input type="text" placeholder="Motiv" value={motiv} onChange={(e) => setMotiv(e.target.value)}/>
                            </div>
                            <input readOnly value="Trimite" className="btn solid" onClick={() => cerere(tipCerere, motiv) }/>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Dorești un document?</h3><br/>
                            <button className="btn transparent" id="documente"
                                    onClick={() => {
                                        const container = document.querySelector(".container");
                                        container.classList.add("cerere-mode");
                                    }}>
                                Solicită
                            </button>
                        </div>
                        <img src="/img/documente.svg" className="image" alt=""/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Vizualizează documente</h3><br/>
                            <button className="btn transparent" id="cerere"
                                    onClick={() => {
                                        const container = document.querySelector(".container");
                                        container.classList.remove("cerere-mode");
                                    }}>
                                Vizualizează
                            </button>
                        </div>
                        <img src="/img/cerere.svg" className="image2" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Documente;