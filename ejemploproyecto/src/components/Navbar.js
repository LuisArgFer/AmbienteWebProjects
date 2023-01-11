import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGOUT } from "./router/paths/paths";

import "./Navbar.css";

export default function NavBar() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/Home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                </li>
                <li>
                    <Link to = {LOGOUT}> Cerrar sesión</Link>
                </li>
            </ul>
        </nav>
    );
}