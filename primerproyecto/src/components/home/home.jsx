import "./Style.css";
import Header from '../header/Header';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import axios from "axios";
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";


function Home() {

  const navigate = useNavigate();
  let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));
  console.log(personaDb)
  let name = "null";
  if (!personaDb) {
    navigate("/")
    alert("Gracias por visitarnos");
  } else {
    name = personaDb.name;
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
      <Header nombre={name} />
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
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