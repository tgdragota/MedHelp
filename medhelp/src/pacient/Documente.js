import './Documente.css';

function Documente() {

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="viz-cerere">
                        <form action="#" className="form-viz">
                            <h1>Vizualizare documete</h1>
                        </form>
                        <form action="#" className="cerere-form">
                            <h2 className="title">Solicită un document</h2>
                            <select className="drop-down-list"  name="cars">
                                <option defaultValue="Selectați" hidden>Tip cerere</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <div className="input-field">
                                <i className="fa fa-pencil"></i>
                                <input type="text" placeholder="Motiv"/>
                            </div>
                            <input type="submit" value="Trimite" className="btn solid"/>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Dorești un document?</h3>
                            <p>
                                mesaj daca e nevoie
                            </p>
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
                            <h3>Vizualizează documente</h3>
                            <p>
                                mesaj daca e nevoie
                            </p>
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