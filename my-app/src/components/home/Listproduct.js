import React, { useState } from "react"; // React Hooks


export default function List(props) {
	const [list, setList] = useState(props.products);

	const removeItem = (index) => {
		setList(list.filter((item) => item !== list[index]));
	};

	return (
		<div className="div-container">
			<h2>Lista de Artículos</h2>
			{list && (
				<ul className="list-group">
					{list.map((person, index) => (
                        <li className="list-group-item" key={index} >
                            {person.title}
                            {person.title}
                            <div className="list-div">
                                <button
                                    className="btn-primary"
                                    onClick={() => removeItem(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
					))}
				</ul>
			)}
		</div>
	);
}