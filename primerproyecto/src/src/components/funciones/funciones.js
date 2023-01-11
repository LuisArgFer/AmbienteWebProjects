import axios from "axios";

const todosCarts = async (state) => {
    const peticion = await axios.get('https://dummyjson.com/carts')
    state(peticion.data.carts)
}

export {
    todosCarts
}