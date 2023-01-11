import React, {useState, useEffect} from "react";
import{useNavigate,useParams} from "react-router"
import axios from "axios";
import "./style.css";

function logival({users},email,contra,navigate){ 
    console.log(users);
    let val="V";
    
    if(!email || !contra){       
    }else{
        for (let i = 0; i < users.length; i++) {
            if(email==users[i].email && contra==users[i].password){
                val="V";
                sessionStorage.clear();//se limpia la sesion
                const au = {//se carga datos de api
                    id:users[i].id,
                    name: users[i].firstName+" "+users[i].lastName
                }
                sessionStorage.setItem('Usuario',JSON.stringify(au));//se guarda en la sesion
                break;               
            }else{
                val="F";
            }
        }//fin for
        if(val=="V"){//validacion de datos
            alert("Bienvenido");          
            navigate("/home");
        }else{
            alert("Datos Incorrectos");
        }
    }

  

}


function Body(props) {
    const userUrl = " https://dummyjson.com/users";
    const navigate=useNavigate();
	let [users, setUsers] = useState({});
    useEffect(() => {
		axios.get(userUrl).then(function (response) {
			setUsers(response.data);
		});
	}, []);

    let [email,setEmail]=useState('');
    let [contra,setContra]=useState('');    
	return (
           <>
                <div className="cover">
                    <h1>Login</h1>
                    <input placeholder="email"  type="text"  onChange={ev=>setEmail(ev.target.value)} required/>
                    <input placeholder="password" type="password" onChange={ev=>setContra(ev.target.value)} required/>

                    <input className="login-btn" type="submit" value="login" onClick={()=>logival(users,email,contra,navigate)}/>

                    <p className="text">Or login using</p>

                    <div className="alt-login">
                        <div className="facebook"></div>
                        <div className="google"></div>
                    </div>   
                </div>          
           </>      
	);
}

export default Body;