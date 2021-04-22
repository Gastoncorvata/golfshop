import { CartContext } from "../../Context/CartContext";
import React, { useContext } from "react";

export const Subtotal = ({ cartItem }) => {
	const { cart } = useContext(CartContext);

	return (
		<>
			<h2 className="">
				Subtotal {cart.length}
				{cart.length > 1 ? <span> Productos: </span> : <span> (producto): </span>}
				<strong>U$S&nbsp;{cartItem.item.price * cartItem.quantity}</strong>
			</h2>
		</>
	);
};

export default Subtotal;
