import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router"
import axios from "axios";


function Registro() {
    
    let navigate=useNavigate();
    const Registrar = async (usuario, email1, contra, contra2) => {   
        if(!usuario || !email1 || !contra || !contra2){
            alert("Falta algun dato por ingresar");
        }else{
            axios.post('https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/user',{
            name: usuario,
            email:email1,
            password: contra,
            passwordConfirm: contra2
            },{
                headers: {
                'Content-Type': 'application/json'
                }  
         }).then(function (res) {
                 console.log(res);
                 if(res){
                    navigate("/");
                 }
               }).catch(error=>{
                console.log("error: "+error);
                alert("El correo digitado ya existe");
              });
              
        };

    };


    
    let [usuario, setUsuario] = useState('');
    let [correo, setCorreo] = useState('');
    let [contra, setContra] = useState('');
    let [contra2, setContra2] = useState('');
    return (
        <>
            <div className="">
                <h1>Registro</h1>
                <div id="">
                    <div className="">
                        <input className="" type="text" onChange={ev => setUsuario(ev.target.value)} required />
                        <span></span>
                        <label>Nombre</label>
                    </div>
                    <div className="">
                        <input className="" type="text" onChange={ev => setCorreo(ev.target.value)} required />
                        <span></span>
                        <label>Correo</label>
                    </div>
                    <div className="">
                        <input className="" type="password" onChange={ev => setContra(ev.target.value)} required />
                        <span></span>
                        <label>Contraseña</label>
                    </div>
                    <div className="">
                        <input className="" type="password" onChange={ev => setContra2(ev.target.value)} required />
                        <span></span>
                        <label>Confirmar Contraseña</label>
                    </div>

                    <input type="submit" value="Registrar" onClick={() => Registrar(usuario, correo, contra, contra2)} />
                    <div className="">Si ya estas registrado<a href="/">Login</a></div>
                </div>

            </div>
        </>
    );
}

export default Registro;