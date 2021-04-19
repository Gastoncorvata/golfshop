import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import EmptyCart from "../EmptyCart";
import FullCart from "../FullCart";


const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<>
			<div className="">
				{cart.length <= 0 ? <EmptyCart /> : <FullCart />}
			</div>
		</>
	);
};

export default Cart;
