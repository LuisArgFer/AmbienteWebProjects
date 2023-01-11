import React, { useEffect, useState } from "react";
import { todosCarts } from "./funciones/funciones";

const Cart = () => {
    const [carts, setCarts] = useState(null)
    useEffect(()=>{
        todosCarts(setCarts)
    },[])

    return (
        <>
            {carts !== null ? (
                carts.map(cart => (
                    <div key={cart.id}>
                        {cart.id}
                    </div>
                ))
            ) : ('no hay carts')}
        </>   
    )
}

export default Cart