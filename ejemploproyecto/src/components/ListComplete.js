import React, { useState } from "react"; // React Hooks
import "./List.css";

export default function List(props) {
	const [list, setList] = useState(props.products);

	const add = (index) => {
		//check if the product is in the array
		let pass = false;
		props.carts[0].products.map((ele) => {
			console.log(ele.id);
			console.log(list[index].id);
			if(ele.id === list[index].id) {
				return pass = true;
			}
			return pass;
		})
		//if product is not in array
		if(pass === false) {
			//create new product similar to the ones in array products
			let obj = {
				id: list[index].id,
				title: list[index].title,
				price: list[index].price,
				quantity: 1,
				total: list[index].price,
				discountedPrice: list[index].price,
				discountPercentage: list[index].discountPercentage,
			};
			//add that new product object
			let newP = props.carts[0].products;
			props.update(prevList => {
				return prevList.map((ele) => {
					newP.push(obj);
					console.log('aber',newP);
					return {...ele, products: newP}
				})
			})
		}else{
			//if the propuduct is already in array, increases quantity
			props.update(prevList => {
				return prevList.map((ele) => {
					return {...ele, products: ele.products.map((product) => {
						if(product.id === list[index].id){
							let cont = product.quantity;
							return {...product, quantity: cont+1};
						}else{
							return product
						}
					})}
				})
			})
		}
	};

	//map list of all products and show it on home screen
	return (
		<div className="div-container">
			<div className="products-list-text">
				<h2>Lista de Artículos</h2>
			</div>
			{list && (
				<ul className="list-group">
					{list.map((product, index) => (
                        <li className="list-group-item" key={index} >
                            {product.title}
							<img src={product.thumbnail} alt={product.title}/>
                            <div className="list-div">
                                <button
                                    className="btn-add"
                                    onClick={() => add(index)}
                                >
                                    Agregar
                                </button>
                            </div>
                        </li>
					))}
				</ul>
			)}
		</div>
	);
}