import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header";

function Standingsgroup() {
    let [usuario, setusuario] = useState(JSON.parse(sessionStorage.getItem('Token')))
    let [standings, setStandings] = useState([]);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/standings', {
            headers: {
                'Authorization': 'Bearer ' + usuario,
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
            setStandings(res.data.data);

        }).catch(error => {
            console.log("error: " + error);
        });
    }, []);

    let [groupid, setGroup] = useState();


    return (
        <>
            <div className="">
                {<Header />}
                <h1>Standings Group</h1>
                
                    <div className="">
                        <input type="text" onChange={ev => setGroup(ev.target.value)} placeholder="Digite el Grupo que desea ver" />
                        <div className="">
                            {standings.map((stan, index) => (
                                groupid === stan.group ?
                                    <div className="">
                                        <h3>GRUPO {stan.group}</h3>
                                        {stan.teams.map((teams) => (
                                            <div className="">
                                                <div className="groups-details">
                                                    <h2>{teams.name_en}</h2>
                                                    <img src={teams.flag} alt="" />
                                                </div>
                                                <div>
                                                    <div>
                                                        <h3>Goles a favor:   {teams.gf}</h3>
                                                        <h3>Goles en contra:  {teams.ga}</h3>
                                                        <h3>Partidos jugados:  {teams.mp}</h3>
                                                        <h3>Partidos ganados:  {teams.w}</h3>
                                                        <h3>Partidos perdidos:  {teams.l}</h3>
                                                        <h3>Partidos empates:  {teams.d}</h3>
                                                        <h3>Puntos obtenidos:  {teams.pts}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div> : null
                            ))}
                        </div>
                    </div> 
                
            </div>
        </>
    );

}
export default Standingsgroup;