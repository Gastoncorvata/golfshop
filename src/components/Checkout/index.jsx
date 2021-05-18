import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase";
import "firebase/firestore";

const historyGoBack = () => {
	window.history.go(-3);
};

const Checkout = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [adress, setAdress] = useState("");
	const { cart, totalPrecio, clear } = useContext(CartContext);
	const [idOrden, setIdOrden] = useState(null);

	const guardarOrden = (e) => {
		e.preventDefault();
		const comprador = { name, phone, email, adress };

		const db = getFirestore();

		const ordersCollection = db.collection("orders");

		const date = firebase.firestore.Timestamp.fromDate(new Date());

		setTimeout(() => {
			clear();
		}, 1000);

		const items = cart.map((cartItem) => {
			return {
				id: cartItem.item.id,
				title: cartItem.item.title,
				price: cartItem.item.price,
				Total: totalPrecio,
			};
		});

		ordersCollection.add({ buyer: comprador, items, date, totalPrecio }).then((doc) => {
			setIdOrden(doc.id);
		});

		const itemsCollection = db.collection("items").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cart.map((e) => e.item.id)
		);

		itemsCollection.get().then((resultado) => {
			if (resultado.exists) {
				const batch = db.batch();
				for (const documento of resultado) {
					const stockActual = documento.data().stock;

					const itemDelCart = cart.find((cartItem) => cartItem.item.id === document.id);

					const cantidadComprado = itemDelCart.quantity;

					const nuevoStock = stockActual - cantidadComprado;

					batch.update(documento.ref, { stock: nuevoStock });
					//update
				}

				batch.commit();
			}
		});
	};

	return (
		<>
			<div className="float-left h-screen pl-10 text-center w-1/2">
				<p className="bg-emerald-200 font-medium p-8 rounded-full shadow-2xl text-3xl text-white w-10/12">
					{idOrden ? `Your order was made successfully. YOUR ORDER IS: ${idOrden}` : null}
				</p>
				<button
					onClick={historyGoBack}
					className="bg-teal-500 border-b-4 border-green-700 font-bold hover:bg-blueGray-400 m-4 px-4 py-2 rounded text-white"
				>
					Go Back
				</button>
			</div>
			<h3 className="font-bold text-3xl text-blue-400 text-center">
				Fill in your details to confirm the purchase!{" "}
			</h3>
			<div className="flex justify-center">
				<div className="bg-blueGray-100 border flex-col items-center m-4 p-3 rounded w-auto">
					<form action="" onSubmit={guardarOrden}>
						<label className="" htmlFor="nombreApellido">
							Name and Surname
						</label>
						<input
							className="h-8 mb-2 rounded w-full"
							type="text"
							name="name"
							id="nombreApellido"
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</form>
					<form>
						<label className="" htmlFor="Email">
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
						<label className="" htmlFor="phone">
							Telephone
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
						<label className="" htmlFor="adress">
							Address
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
						type="submit"
						className="bg-indigo-600 font-bold h-12 hover:bg-indigo-500 hover:shadow-lg m-4 ml-8 px-12 rounded-full text-white w-auto"
						onClick={guardarOrden}
					>
						Confirm purchase
					</button>
				</div>
			</div>
		</>
	);
};

export default Checkout;
