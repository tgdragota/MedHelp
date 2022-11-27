import "./Acasa.css";
import {useState} from "react";

function Acasa() {

    const myStyle={
        height:'95vh',
        backgroundImage:
            "url(./img/fundal.jpg)" ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const information=[
        {id: 0, value: "Cu o singură programare și un singur drum la medic te poți proteja. " +
                "Evită co-infecția, în sezonul rece, vaccinul gripal te ajută la protecția ta și limitează răspândirea virusului gripal printre colegi,clienți și membrii familiei tale."},
        {id: 1, value: "Cu o singură programare și un singur drum la medic te poți proteja. "},
        {id: 2, value: "Evită co-infecția, în sezonul rece, vaccinul gripal te ajută la protecția ta și limitează răspândirea virusului gripal printre colegi,clienți și membrii familiei tale."}
    ]

    const  [informationData, setInformationData] = useState(information[0].value)
    const handleClick=(index) => {
        console.log(index);
        const informationSlider=information[index].value
        setInformationData(informationSlider)
    }
    return (
        <>
            <div style={myStyle}>
                <div className="info" >
                    <div className="text">
                        <h1>Fii mai puternic decât gripa. Vaccineaza-te acum antigripal!</h1>
                    </div><
                    div className="subtext">
                        <h1>{informationData}</h1>
                    </div>
                    <div className="flex-row">
                        {information.map((data, i) =>
                            <h1 className="dot" key={i} onClick={() => handleClick(i) }>.</h1>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Acasa;