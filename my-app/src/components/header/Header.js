import React, {useState} from "react";
import "./style.css";

function Header(props) {
    const cerrar=()=>{
        sessionStorage.clear();
    }
	return (
		<header>
			<nav className="nav">
                <a  className="logo nav-link" href="#">Bienvenido</a>
                <ul className="nav-menu nav-menu_visible">
                    <li  className="nav-menu-item"><a className="nav-menu-link nav-link" href="#">Bienvenido {props.nombre}</a></li>
                    <li  className="nav-menu-item"><a onClick={()=>cerrar()} className="nav-menu-link nav-link" href="/">Cerrar Sesion</a></li>
                </ul>
            </nav>
		</header>
	);
}

export default Header;

