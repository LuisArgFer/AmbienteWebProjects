import React, { useState } from "react"; // React Hooks
import "./List.css";

export default function List(props) {
	const [list, setList] = useState(props.carts);

	console.log('estos son los carts en list',props.carts)

	//removes items from cart and reduces amount of products
	const removeItem = (index) => {
		//if products are less than 2, delete the product
		if(list[0].products[index].quantity < 2) {
			props.update(prevList => {
				return prevList.map((ele) => {
					return {...ele, products: ele.products.filter((item) => item !== ele.products[index])};
				})
			})
			setList(prevList => {
				return prevList.map((ele) => {
					return {...ele, products: ele.products.filter((item) => item !== ele.products[index])};
				})
			})
		//if products are more than 1, decreases quantity
		}else{
			props.update(prevList => {
				return prevList.map((ele) => {
					return {...ele, products: ele.products.map((product) => {
						if(product === ele.products[index]){
							let cont = ele.products[index].quantity;
							return {...product, quantity: cont-1};
						}else{
							return product
						}
					})}
				})
			})
			setList(prevList => {
				return prevList.map((ele) => {
					return {...ele, products: ele.products.map((product) => {
						if(product === ele.products[index]){
							let cont = ele.products[index].quantity;
							return {...product, quantity: cont-1};
						}else{
							return product
						}
					})}
				})
			})
		}
	};

	//show the users cart products
	return (
		<>
		{list.map((item) => (
			<ul className="list-group">
				Total: {item.total}
				{item.products.map((ele, index) => (
					<li className="list-group-item" key={index} >
						{console.log(ele)}
						{ele.title}
						<img src={ele.thumbnail}></img>
						<div>Precio: {ele.price}</div>
						<div>Cantidad: {ele.quantity}</div>
						<div className="list-div">
							<button
								className="btn-remove"
								onClick={() => removeItem(index)}
							>
								Eliminar
							</button>
						</div>
					</li>
				))}
			</ul>
		))}
		</>
	);
}