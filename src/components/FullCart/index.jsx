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
			<table className="justify-self-center mt-10">
				<tbody>
					{cart.map((cartItem) => {
						return <CartItems key={cartItem.item.id} cartItem={cartItem} />;
					})}
				</tbody>
			</table>

			<h2 className="m-8 p-5 text-4xl text-center text-lightBlue-400">
				Total {cart.length}
				{cart.length > 1 ? <span> Products: </span> : <span> Product: </span>}
				<strong className="">U$S&nbsp;{cart.totalPrice}</strong>
			</h2>

			<div className="flex justify-center">
				<Link to={`/checkout`}>
					<button className=" bg-blue-500 border-b-4 border-blue-700 font-bold hover:bg-blueGray-400 m-4 px-4 py-2 rounded text-white">
						Proceed to payment
					</button>
				</Link>
				<button
					className=" bg-red-500 border-b-4 border-red-700 font-bold hover:bg-blueGray-400 m-4 px-4 py-2 rounded text-white"
					onClick={clear}
				>
					{" "}
					Remove cart
				</button>

				<button
					onClick={historyGoBack}
					className="bg-teal-500 border-b-4 border-green-700 font-bold hover:bg-blueGray-400 m-4 px-4 py-2 rounded text-white"
				>
					Back to category
				</button>
			</div>

			<div className=""></div>
		</>
	);
};

export default FullCart;
