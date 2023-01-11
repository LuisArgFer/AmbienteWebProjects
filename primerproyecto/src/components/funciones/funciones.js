import axios from "axios";

const todosCarts = async (state) => {
    let personaDb = JSON.parse(sessionStorage.getItem('Usuario'));
    const carts = await axios.get('https://dummyjson.com/carts')
    const cart = carts.data.carts.filter(x => x.userId == personaDb.id)
    state(cart[0].products)
}

export {
    todosCarts
}