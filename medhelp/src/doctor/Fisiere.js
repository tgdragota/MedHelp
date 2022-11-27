import './Fisiere.css';
import React, {useEffect, useState} from 'react';
import {incarca} from "../firebase";

function Fisiere() {

    const [cnp, setCnp] = useState("");
    const [file, setFile] = useState("");

    useEffect(() => {
        const onPageLoad = () => {
            const dropArea = document.querySelector(".drag-image"),
                dragText = dropArea.querySelector("#text"),
                button = dropArea.querySelector("#browse"),
                input = dropArea.querySelector("#fisiere");
            let file;

            button.onclick = ()=>{
                input.click();
            }

            input.addEventListener("change", function(){

                file = this.files[0];
                setFile(file);
                document.getElementById('fileName').innerHTML = file.name;
            });

            dropArea.addEventListener("dragover", (event)=>{
                event.preventDefault();
                dragText.textContent = "Release to Upload File";
            });

            dropArea.addEventListener("dragleave", ()=>{
                dragText.textContent = "Drag & Drop to Upload File";
            });

            dropArea.addEventListener("drop", (event)=>{
                event.preventDefault();

                file = event.dataTransfer.files[0];
                document.getElementById('fileName').innerHTML = file.name;
            });
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="prog-viz">
                        <form className="prog-form">
                            <h1>Încarcare fișe medicale</h1><br/>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="CNP" value={cnp} onChange={(e) => setCnp(e.target.value)}/>
                            </div><br/><br/>
                            <div className="drag-image">
                                <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div><br/>
                                <h6 id="text">Drag & Drop File Here</h6>
                                <span>OR</span>
                                <button id="browse"
                                >Browse File</button>
                                <span id="fileName" className="text-primary "/>
                                <input id="fisiere" type="file" hidden/>
                            </div><br/><br/>
                            <input type="submit" value="Încarcă" className="btn solid"/>
                        </form>
                        <form action="#" className="viz-form">
                            <h1>Vizualizare fișe medicale</h1><br/>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="CNP"/>
                            </div><br/>
                            <input type="submit" value="Vizualizare" className="btn solid"/>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Fișe medicale pacienți</h3><br/>
                            <button className="btn transparent" id="documente"
                                    onClick={() => {
                                        const container = document.querySelector(".container");
                                        container.classList.add("viz-mode");
                                    }}>
                                Vizualizează
                            </button>
                        </div>
                        <img src="/img/cerere.svg" className="image2" alt=""/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Încărcare fișe medicale</h3><br/>
                            <button className="btn transparent" id="cerere"
                                    onClick={() => {
                                        const container = document.querySelector(".container");
                                        container.classList.remove("viz-mode");
                                    }}>
                                Încarcă
                            </button>
                        </div>
                        <img src="/img/documente.svg" className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fisiere;