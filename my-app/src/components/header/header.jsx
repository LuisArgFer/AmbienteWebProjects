import React, {useState} from "react";
import "./style.css";

// function llamadaboton(){

// }
function llamado(){
    const navmenu=document.querySelector(".nav-menu")
    navmenu.classList.toggle("nav-menu_visible");
}

function Header(props) {
    const cerrar=()=>{
        sessionStorage.clear();
    }
	return (
		<header>
			<nav className="nav">
                <a  className="logo nav-link" href="#">Trodo</a>
                <button onClick={()=>llamado()} className="nav-toggle">
                    <i className="fa-solid fa-bars-progress"></i>
                </button>
                <ul className="nav-menu nav-menu_visible">
                    <li  className="nav-menu-item"><a className="nav-menu-link nav-link" href="#">Bienvenido {props.nombre}</a></li>
                    <li  className="nav-menu-item"><a onClick={()=>cerrar()} className="nav-menu-link nav-link" href="/">Cerrar Sesion</a></li>
                </ul>
            </nav>
		</header>
	);
}

export default Header;
