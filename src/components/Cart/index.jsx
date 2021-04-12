import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const Cart = () => {
	const CartContextUse = useContext(CartContext);

	return (
		<div>
			<h1 className=" bold text-center text-teal-500">
				{" "}
				SOY UN CARRITO DE CHOPIN {CartContextUse}{" "}
			</h1>
		</div>
	);
};

export default Cart;
