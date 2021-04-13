import React from "react";
import { Link } from "react-router-dom";


const EmptyCart = () => {
	return (
		<>
			<div className="justify-center text-indigo-300">
				<h2 className="text-4xl text-center text-teal-500">
					Your Golf`s Cart <i className="fas fa-shopping-cart"> </i> is empty.
				</h2>
				<p className="text-2xl text-teal-500 text-center">
					Buy everything in{" "}
					<Link to={`/`}>
						<i className="fas fa-golf-ball text-amber-500">Golf Shop</i>
					</Link>
				</p>
			</div>
		</>
	);
};

export default EmptyCart;
