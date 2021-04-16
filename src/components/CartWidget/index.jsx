import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function CartWidget() {
	const { cart } = useContext(CartContext);
	return (
		<>
			{ cart.length <= 0 ? null
			:
			<div className="flex">
			<i className="fas fa-shopping-cart"> </i>
			<div className=" text-red-500 bg-gray-300 rounded-full ml-1 border-gray-300">{cart.totalItems}</div>
			</div> }
		</>
	);
}
