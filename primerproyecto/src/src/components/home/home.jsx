import "./Style.css";
import Header from '../header/Header';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import axios from "axios";
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
//npm install react-router-dom
function Home() {

  const navigate = useNavigate();
  let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));//valida si la persona esta logueada si no lo devuelve al registro
  console.log(personaDb)
  let nomp = "null";
  if (!personaDb) {
    navigate("/")
    alert("Gracias por visitarnos");
  } else {
    nomp = personaDb.name;
  }

  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setdata(response.data.products);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <div className="home">
      <Header nombre={nomp} />
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
          </div>
        )
      })}
    </div>
  );
}


export default Home;