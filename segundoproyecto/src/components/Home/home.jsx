import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header";

function Home() {
    let [usuario, setusuario] = useState(JSON.parse(sessionStorage.getItem('Token')));
    let [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/team', {
            headers: {
                'Authorization': 'Bearer ' + usuario,
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
            setTeam(res.data.data);

        }).catch(error => {
            console.log("error: " + error);
        });
    }, []);


    return (
        <>
            <div className="">
                {<Header />}
                <h1>Teams</h1>
                <div>
                    {team.map((equipos, index) => {
                        return (
                            <div key={equipos.id}>
                                <h2>{equipos.name_en}</h2>
                                <img src={equipos.flag} alt="150" width="150" />
                                <p>Fifa Code: {equipos.fifa_code}</p>
                                <p>Grupo:  {equipos.groups}</p>

                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    );

}
export default Home;