import React from "react";
import { useAuthContext } from "../context/authContext";
import "./Login.css";

export default function Login(props) {

    const {login} = useAuthContext();

    const UsersList = props.UsersList;

    console.log(UsersList)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const Email = e.target.Email.value;
        const Password = e.target.password.value;
        Login(Email, Password)
    }

    const Login = (Email, Password) => {
        if (Email === "" || Password === ""){
            alert("Espacios vacios!")
        } else {
            UsersList.forEach(u => {
                if (Email === u.email && Password === u.password){
                    console.log("Bienvenido: "+u.firstName)
                    login(JSON.stringify(u));
                    
                } 
            });//end for
        }//end empty spaces if
        
    }
    return (
        <section>
            <form className="Login-container" onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <div className="controls-container">
                    <input className="controls" type="text" name="Email" placeholder="Email"></input>
                    <span className="focus-border"></span>
                </div>
                <div className="controls-container">
                    <input className="controls" type="password" name="password" placeholder="Password"></input>
                    <span className="focus-border"></span>
                </div>
                <input className="btn-log" type="submit" value="Login"></input>
            </form>
        </section>
    );
}