import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../header";

function Match() {
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
    
    

    return (
        <>
            <div className="">
                {<Header />}
                <h1>Match</h1>
                <div>
                    <a href="/matchdate">Filtro por Fecha</a>
                    {match.map((juego, index) => {
                        return (
                            <div key={juego.id}>
                                <p><img src={juego.away_flag} alt="" />   vs   <img src={juego.home_flag} alt="" /></p>
                                <p>{juego.away_team_en}    vs     {juego.home_team_en}</p>
                                <p>{juego.away_score}  -   {juego.home_score}</p>
                            </div>
                               
                        )
                    })}
                </div>
            </div>
        </>

    );

}
export default Match;