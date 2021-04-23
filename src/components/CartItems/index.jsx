import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";



const CartItems = ({ cartItem }) => {
	const { removeItem } = useContext(CartContext);

	const handlerRemoveItem = () => {
		removeItem(cartItem.item.id);
	};

	return (
		<>
			<tbody className="divide-y divide-gray-200">
				<tr>
					<td className="bg-blueGray-100 border px-6 py-4">
						<div className="flex items-center space-x-3">
							<div className="inline-flex w-10 h-10">
								<img
									className="h-10 mr-4 object-cover rounded-full w-10"
									alt="Product avatar"
									src={cartItem.item.img2}
								/>
							</div>
							<div>
								<p className="">{cartItem.item.description2}</p>
								<p className="text-gray-500 text-sm font-semibold tracking-wide">
									{cartItem.item.marca}
								</p>
							</div>
						</div>
					</td>
					<td className="bg-blueGray-100 border px-6 py-4">
						<p className="">{cartItem.item.title}</p>
						<p className="text-gray-500 text-sm font-semibold tracking-wide">
							{cartItem.item.description2}
						</p>
					</td>
					<td className="bg-blueGray-100 border px-6 py-4">
						<p className="">Price</p>
						<p className="text-gray-500 text-sm font-semibold tracking-wide text-center">
							u$d {cartItem.item.price}
						</p>
					</td>
					<td className="bg-blueGray-100 border px-6 py-4">
						<p className="">Quantity</p>
						<p className="text-gray-500 text-sm font-semibold tracking-wide text-center">
							{cartItem.quantity}
						</p>
					</td>
					<td className="bg-blueGray-100 border px-6 py-4">
						<p className="text-center text-sm w-16">SubTotal</p>
						<p className="text-gray-500 text-sm font-semibold tracking-wide text-center">
							u$d {cartItem.quantity * cartItem.item.price}
						</p>
					</td>
					<td className="bg-blueGray-100 border px-6 py-4 text-center">
						<div
							className="cursor-pointer hover: hover:bg-red-500 hover:text-white items-center px-4 rounded-full text-base"
							onClick={handlerRemoveItem}
						>
							<i className="far fa-trash-alt"> </i>
						</div>
					</td>
				</tr>
			</tbody>
		</>
	);
};

export default CartItems;