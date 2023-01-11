import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header";

function Standings() {
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


    return (
        <>
            <div className="">
                {<Header />}
                <h1>Standings</h1>
                <div>
                    <a href="/standingsgroup">Filtro por Fecha</a>
                    {standings.map((estadisticas, index) => {
                        return (
                            <div >
                                <>
                                    <h3>GRUPO {estadisticas.group}</h3>
                                    {estadisticas.teams.map((teams) => (
                                        <div key={teams.id}>
                                            <div>
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
                                </>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );

}
export default Standings;