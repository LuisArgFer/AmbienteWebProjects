import React, {useState, useEffect} from "react";
import{useNavigate,useParams} from "react-router"
import axios from "axios";
import "./style.css";

function Login({users},email,psw,navigate){ 
    console.log(users);
    let val="True";
    
    if(!email || !psw){       
    }else{
        for (let i = 0; i < users.length; i++) {
            if(email==users[i].email && psw==users[i].password){
                val="True";
                sessionStorage.clear();
                const setUser = {
                    id:users[i].id,
                    name: users[i].firstName+" "+users[i].lastName
                }
                sessionStorage.setItem('Usuario',JSON.stringify(setUser));
                break;               
            }else{
                val="False";
            }
        }

        if(val=="True"){
            alert("Bienvenido");          
            navigate("/home");
        }else{
            alert("Datos erroneos");
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
    let [password,setPassword]=useState('');    
	return (
           <>
                <div className="cover">
                    <h1>Login</h1>
                    <input placeholder="email"  type="text"  onChange={value=>setEmail(value.target.value)} required/>
                    <input placeholder="password" type="password" onChange={value=>setPassword(value.target.value)} required/>

                    <input className="login-btn" type="submit" value="login" onClick={()=>Login(users,email,password,navigate)}/>

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