import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { getFirebase } from "../../firebase/";
import { useHistory } from "react-router-dom";
import CartItems from "../CartItems";

const Checkout = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [adress, setAdress] = useState("");
	const { cart, clearCart } = useContext(CartContext);
	const { updateStock, createOrder } = getFirebase();
	const history = useHistory();

	const handleCheckout = () => {
		let newOrder = {
			buyer: [
				{
					name: name,
					email: email,
					phone: phone,
					adress: adress,
				},
			],
			items: [...cart],
			total: cart.totalPrice,
		};

		updateStock(cart)
			.then((result) => {
				return createOrder(newOrder);
			})
			.then((result) => {
				clearCart();
				history.push(`/order/${result.id}`);
			});
	};

	return (
		<>
			<div className="flex justify-center">
				<form className="bg-blueGray-100 border flex-col items-center m-4 p-3 rounded w-auto">
					<form>
						<h3> Completa tus datos para confirmar la compra! </h3>
						<label className="data" for="name">
							Nombre y Apellido
						</label>
						<input
							className="h-8 mb-2 rounded w-full"
							type="text"
							name="text"
							id="nombreApellido"
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</form>
					<form>
						<label className="data" for="Email">
							Email
						</label>
						<input
							className="h-8 mb-2 rounded w-full"
							type="text"
							name="email"
							id="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</form>
					<form>
						<label className="data" for="phone">
							Teléfono
						</label>
						<input
							className="h-8 mb-2 rounded w-full"
							type="text"
							name="phone"
							id="phone"
							onChange={(e) => {
								setPhone(e.target.value);
							}}
						/>
					</form>
					<form>
						<label className="data" for="adress">
							Dirección
						</label>
						<input
							className="h-8 mb-2 rounded w-full"
							type="text"
							name="adress"
							id="adress"
							onChange={(e) => {
								setAdress(e.target.value);
							}}
						/>
					</form>
					<button
						className="bg-indigo-600 font-bold h-12 hover:bg-indigo-500 hover:shadow-lg m-4 ml-8 px-12 rounded-full text-white w-auto"
						onClick={handleCheckout}
					>
						Confirmar compra
					</button>
				</form>
				<div className="checkout__item-container">
					{cart.map((cartItem) => {
						return <CartItems key={cartItem.id} cartItem={cartItem} />;
					})}
					<div className="bg-blueGray-100 mt-10 rounded text-3xl text-center w-6/12">
						<h2 className="border p-3 rounded">
							Total {cart.length}
							{cart.length > 1 ? <span> Productos: </span> : <span> Producto: </span>}
							<strong className="text-teal-500">U$S&nbsp;{cart.totalPrice}</strong>
						</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
