import "./Acasa.css";


function Acasa() {
    const myStyle={
        height:'95vh',
        backgroundImage:
            "url(./img/fundal.jpg)" ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <>
            <div style={myStyle}>
                <div className="info" >
                    <div className="text">
                        <h1>Fii mai puternic decât gripa. Vaccineaza-te acum antigripal!</h1>
                    </div>
                    <div className="subtext">
                        <h1>Cu o singură programare și un singur drum la medic te poți proteja.<br/><br/>Evită co-infecția, în sezonul rece,
                            vaccinul gripal te ajută la protecția ta și limitează răspândirea virusului gripal printre colegi,
                            clienți și membrii familiei tale.</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Acasa;