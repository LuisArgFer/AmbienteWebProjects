import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </footer>
    );
}