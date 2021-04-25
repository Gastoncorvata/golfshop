/*import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useFirestore} from "../../Context/FirebaseContext";


const Order = () => {
	const [order, setOrder] = useState({});
	const { getOrderByID } = useFirestore();
	const { orderId } = useParams();


	useEffect(() => {

		getOrderByID(orderId)
			.then((querySnapshot) => {
				setOrder({ id: querySnapshot.id, ...querySnapshot.data() });
			})
			.catch((error) => console.log(error))

	},);

	return (
		<>
			<div className="">
				<h2 className="">¡Muchas gracias por tu compra!</h2>
				<p className="">Tu número de orden es el #{order.id}</p>
				<p className="">
					Continúa comprando en <Link to={`/`}>Golf Shop</Link>
				</p>
			</div>
		</>
	);
};

export default Order;*/
