import "./Style.css";
import Header from '../header/Header';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import axios from "axios";
import List2 from '../home/Listproduct';
//npm install react-router-dom
function Home() {

  const navigate = useNavigate();
  let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));//valida si la persona esta logueada si no lo devuelve al registro
  console.log(personaDb)
  let nomp = "null";
  if (!personaDb) {
    navigate("/")
    alert("No estas logueado");
  } else {
    nomp = personaDb.name;
  }

  const productUrl = "https://dummyjson.com/products";
	const [products, setProducts] = useState({});

  useEffect(() => {
		axios.get(productUrl).then(function (response) {
			setProducts(response.data.products);
		});
	}, []);

  const productList = (
		products.length ? <List2 products={products}/> : <p>Loading...</p>
	)

 
  return (
    <div>
      <Header nombre={nomp} />
      <div id='grid'>
        <h1>Hola</h1>
      </div>
    </div>
  );
}


export default Home;