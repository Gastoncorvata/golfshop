import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase";
import "firebase/firestore";


const Checkout = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [adress, setAdress] = useState("");
	const { cart } = useContext(CartContext);
	const [idOrden, setIdOrden] = useState(null);


const guardarOrden = (e) => {
	e.preventDefault();
	const comprador = { name, phone, email, adress };

	console.log(comprador);

	const db = getFirestore();

	const ordersCollection = db.collection("orders");

	const date = firebase.firestore.Timestamp.fromDate(new Date());

	const items = cart.map((cartItem) => {
		return { id: cartItem.item.id, title: cartItem.item.title, price: cartItem.item.price };
	});

	ordersCollection.add({ buyer:comprador, items, date }).then((doc) => {
		setIdOrden(doc.id);
	});

	const itemsCollection = db.collection("items").where(
		firebase.firestore.FieldPath.documentId(),
		"in",
		cart.map((e) => e.item.id)
	);
console.log(itemsCollection);

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
					{idOrden ? `Tu pedido fue realizado con Exito. TU ORDEN ES: ${idOrden}` : null}
				</p>
			</div>
			<h3 className="font-bold text-3xl text-blue-400 text-center">
				Completa tus datos para confirmar la compra!{" "}
			</h3>
			<div className="flex justify-center">
				<div className="bg-blueGray-100 border flex-col items-center m-4 p-3 rounded w-auto">
					<form action="" onSubmit={guardarOrden}>
						<label className="" htmlFor="nombreApellido">
							Nombre y Apellido
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
						<label className="" htmlFor="adress">
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
						type="submit"
						className="bg-indigo-600 font-bold h-12 hover:bg-indigo-500 hover:shadow-lg m-4 ml-8 px-12 rounded-full text-white w-auto"
						onClick={guardarOrden}
					>
						Confirmar compra
					</button>
				</div>
			</div>
		</>
	);
};

export default Checkout;
