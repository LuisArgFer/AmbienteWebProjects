import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header(props) {
    const cerrar = () => {
        sessionStorage.clear();
    }
    return (
        <header>
            <div className="nav">
                <NavLink className="nav-menu-item">home</NavLink>
                <NavLink className="nav-menu-item"><a className="nav-menu-link nav-link" href="#">Welcome {props.nombre}</a></NavLink>
                <NavLink className="nav-menu-item"><a onClick={() => cerrar()} className="nav-menu-link nav-link" href="/">Logout</a></NavLink>
                <NavLink to='/cart' className="nav-menu-item"><img width="50" src="https://cdn-icons-png.flaticon.com/512/107/107831.png"></img></NavLink>
            </div>
        </header>

    );
}

export default Header;

