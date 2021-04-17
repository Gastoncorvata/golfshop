import CartItems from "../CartItems";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const FullCart = () => {
	const { cart, clear } = useContext(CartContext);

	const historyGoBack = () => {
		window.history.go(-2);
	};

	return (
		<>
			<div className="">
				<h2 className="">Cart</h2>
				<p className="">Precio</p>
				<div className="">
					{cart.map((cartItem) => {
						return <CartItems key={cartItem.item.id} cartItem={cartItem} />;
					})}
					<div className="">
						<button onClick={historyGoBack} className="">
							Volver a categoria
						</button>
						<h2 className="">
							Total {cart.length}
							{cart.length > 1 ? <span> (productos): </span> : <span> (producto): </span>}
							<strong className="">U$S&nbsp;{cart.totalPrice}</strong>
						</h2>
					</div>
				</div>
			</div>
			<div className="">
				<Link to={`/pagar`}>
					<button className="">Proceder al pago</button>
				</Link>
				<button className="" onClick={ clear }>
					Vaciar carrito
				</button>
			</div>
		</>
	);
};

export default FullCart;
