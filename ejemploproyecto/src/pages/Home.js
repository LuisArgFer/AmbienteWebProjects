import React, { useState, useEffect } from "react";
import Nav from "../components/Navbar"
import axios from "axios";
import "./Home.css";
import Modal from '../components/modal/Modal';

import List from "../components/List";
import List2 from "../components/ListComplete";

export default function Home() {
  const ActualUser = 'ActualUser';
  const current_User = JSON.parse(window.localStorage.getItem(ActualUser));

  const userUrl = "https://dummyjson.com/carts";
  const [users, setUsers] = useState({});

  useEffect(() => {
    axios.get(userUrl).then(function (response) {
      setUsers(response.data.carts);
    })
  }, []);

  const userList = (
    users.length ? <List users={users} id={current_User.id} /> : <p>Loading...</p>
  )

  const productUrl = "https://dummyjson.com/products";
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get(productUrl).then(function (response) {
      setProducts(response.data.products);
    });
  }, []);



  const productList = (
    products.length ? <List2 products={products} /> : <p>Loading...</p>
  )

  //for modal
  const [modalState, setModalState] = useState(false);

  return (
    <div>
      <Nav />
      <h1>Bienvenido: {current_User.firstName}</h1>
      <p>Aqui podras ver tus articulos!!</p>
      <button className="btn-primary" onClick={() => { setModalState(!modalState) }}>
        ver mi cart
      </button>
      <Modal open={modalState} close={setModalState}>{productList}</Modal>
      <div className="main-div">
        {productList}
      </div>
    </div>
  );
}