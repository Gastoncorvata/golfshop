import React, { useContext } from "react";
import { getFirestore } from "../firebase";
import firebase from "firebase/app";

export const FirebaseContext = React.createContext(false);
export const useFirebaseContext = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
	const db = getFirestore();

	const updateStock = (cart) => {
		return new Promise((resolve, reject) => {
			cart.map(async (cartItem) => {
				let query = await db.collection("item").doc(cartItem.item.id).get();
				if (!query.empty) {
					const productData = query.data();
					if (productData.stock >= cartItem.quantity) {
						productData.stock -= cartItem.quantity;
						try {
							await db
								.collection("item")
								.doc(cartItem.item.id)
								.update({ stock: productData.stock });
						} catch (e) {
							reject("Error al operar sobre la Base de Datos");
						}
					} else {
						reject(`No existen suficientes ${productData.title} para cubrir la demanda`);
					}
				} else {
					reject("No existe el producto en la DB");
				}
			});
			resolve(true);
		});
	};

	/*Orders*/
	const createOrder = async (data) => {
		return new Promise(async (resolve, reject) => {
			const newOrder = {
				...data,
				date: firebase.firestore.Timestamp.fromDate(new Date()),
			};
			const res = await db.collection("ORDERS").add(newOrder);
			if (res.id) {
				resolve({ id: res.id, ...newOrder });
			} else {
				reject("Error al almacenar en DB Firebase");
			}
		});
	};

	const getOrderByID = (orderId) => {
		return db.collection("ORDERS").doc(orderId).get();
	};

	return (
		<FirebaseContext.Provider
			value={{
				updateStock,
				createOrder,
				getOrderByID,
			}}
		>
			{children}
		</FirebaseContext.Provider>
	);
};

export default FirebaseProvider;
