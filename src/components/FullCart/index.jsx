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
					<div className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
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
					<button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
						Proceder al pago
					</button>
				</Link>
				<button
					className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
					onClick={clear}
				>
					Vaciar carrito
				</button>
			</div>
		</>
	);
};

export default FullCart;
