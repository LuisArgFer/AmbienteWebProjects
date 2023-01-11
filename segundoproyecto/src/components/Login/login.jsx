import React, {useState, useEffect} from "react";
import{useNavigate,useParams} from "react-router"
import axios from "axios";

function Logicalogin(correo,cont,navigate){ 
    let Tokuser ="";
    if(!correo || !cont){ 
        if(!correo && cont){
            alert("Llenar campos");           
        }if(!cont && correo){
            alert("Llenar campos"); 
        }if(!correo && !cont){
            alert("Llenar campos"); 
        } 

    }else{
        axios.post('https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/user/login',{  
            email: correo,
            password: cont      
        },{
            headers: {
            'Content-Type': 'application/json'
             }  
        }).then(function (res) {
            console.log(res);
            if(res){
               
                Tokuser=res.data.data.token;
               sessionStorage.setItem('Token',JSON.stringify(Tokuser)); 
               navigate("/home");         
            };
          }).catch(error=>{
            console.log("error: "+error);
            alert("Error Datos ingresados");
          });
          
    };
    
}

function Login() {
    const navigate=useNavigate();
	
    let [correo,setCorreo]=useState('');
    let [contra,setContra]=useState('');    
	return (
           <>
               <div className="">
                    <h1>Login</h1>
                    <div id="" >                        
                        <div className="">
                            <input className="email" type="text"  onChange={ev=>setCorreo(ev.target.value)} required/>
                            <span></span>
                            <label>Correo</label>
                        </div>
                        <div className="">
                            <input className="contra" type="password" onChange={ev=>setContra(ev.target.value)} required/>
                            <span></span>
                            <label>Contraseña</label>
                        </div>
                        <input type="submit" value="Login" onClick={()=>Logicalogin(correo,contra,navigate)}/>
                        <div className="">Si no estas registrado<a href="/registro">Registrar</a></div>
                    </div>

               </div>              
           </>      
	);
}

export default Login;