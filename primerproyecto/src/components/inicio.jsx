import React, { useContext, useEffect, useState } from "react";
import { todosCarts } from "./funciones/funciones";
import { Cartcontext } from "../context/Context";
import "./Inicio.css";

const Cart = () => {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;
    const [products, setCarts] = useState(null)
    useEffect(() => {
        todosCarts(setCarts)
    }, [])

    return (
        <div className="card">
            {products !== null ? (
                    products.map(product => (
                        <div key={product.title}>  
                            <p>{product.title}</p>
                            <p>{product.quantity * product.price}</p>
                            <div className="quantity">
                                <button onClick={() => dispatch({ type: 'INCREASE', payload: product })}>+</button>
                                <p>{product.quantity}</p>
                                <button onClick={() => 
                                    {
                                        if(product.quantity > 1)
                                        {
                                            dispatch({type: "DECREASE", payload: product});
                                        } else 
                                        {
                                            dispatch({ type: "REMOVE", payload: product })
                                        }
                                        }}>-</button>
                            </div>
                            <h2 onClick={() => dispatch({ type: "REMOVE", payload: product })}>
                             x
                            </h2>
                        </div>
                ))  
            ) : ('no hay productos')}
        </div>
    )
}

export default Cart