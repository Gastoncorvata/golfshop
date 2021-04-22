import "./checkout.css";
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
			<div className="checkout__container">
				<form className="checkout__form__container">
					<form>
						<h3> Completa tus datos para confirmar la compra! </h3>
						<label className="data" for="name">
							Nombre y Apellido
						</label>
						<input
							className="checkout__input"
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
							className="checkout__input"
							type="email"
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
							className="checkout__input"
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
							className="checkout__input"
							type="address"
							name="adress"
							id="adress"
							onChange={(e) => {
								setAdress(e.target.value);
							}}
						/>
					</form>
					<button
						className="bg-indigo-600 font-bold hover:bg-indigo-500 hover:shadow-lg m-4 px-12 rounded-full text-white w-auto"
						onClick={handleCheckout}
					>
						Confirmar compra
					</button>
				</form>
				<div className="checkout__item-container">
					{cart.map((cartItem) => {
						return <CartItems key={cartItem.id} cartItem={cartItem} />;
					})}
					<div className="checkout__cart__right">
						<h2 className="subtotal">
							Total {cart.length}
							{cart.length > 1 ? <span> Productos: </span> : <span> Producto: </span>}
							<strong className="checkout__subtotal">U$S&nbsp;{cart.totalPrice}</strong>
						</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
