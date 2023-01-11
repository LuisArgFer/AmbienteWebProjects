import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";


function Header() {
    const navigate = useNavigate();
    let [usuario, setUsu] = useState(JSON.parse(sessionStorage.getItem('Token')));

    useEffect(() => {
        if (usuario) {
           

        } else {
            navigate("/")
        }

    });

    const logout = () => {
        sessionStorage.clear();
        setUsu(usuario.filter());

    }

    return (
        <header className="">
            <nav className="">             
                <ul className="">
                    <li className=""><NavLink className="" to="/home">Home</NavLink></li>
                    <li className=""><NavLink className="" to="/standings">Standings</NavLink></li>
                    <li className=""><NavLink className="" to="/match">Matchs</NavLink></li>
                    <li className=""><NavLink onClick={() => logout()} className="" >Log Out</NavLink></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;