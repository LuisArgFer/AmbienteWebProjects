import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header";

function Matchdate() {
    let [usuario, setusuario] = useState(JSON.parse(sessionStorage.getItem('Token')))
    let [match, setMatch] = useState([]);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/match', {
            headers: {
                'Authorization': 'Bearer ' + usuario,
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
            setMatch(res.data.data);

        }).catch(error => {
            console.log("error: " + error);
        });
    }, []);

    const [fecha, setfecha] = useState();


    return (
        <>
            <div className="">
                {<Header />}
                <h1>Match Date</h1>
                <div>
                    <input type="text" onChange={ev => setfecha(ev.target.value)} placeholder="Fecha del partido mm/dd/yy" />
                    <div className="">
                        {match.map((juego, index) => (
                            fecha === juego.local_date.slice(0, -6) ?
                                <div className="">
                                    <div className="">
                                        <img src={juego.away_flag} alt="" /> vs <img src={juego.home_flag} alt="" />
                                        <p>{juego.away_team_en}</p>  vs <p>{juego.home_team_en}</p>
                                    </div>
                                </div> : null
                        ))}
                    </div>
                </div>

            </div>
        </>

    );  

}
export default Matchdate;