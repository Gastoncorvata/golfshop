import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartItems = ({ cartItem }) => {
	const { removeItem } = useContext(CartContext);

	const handlerRemoveItem = () => {
		removeItem(cartItem.item.id);
	};

	return (
		<>
			<ul className="divide-y divide-gray-100">
				<article className="p-4 flex space-x-4">
					<img
						src={cartItem.item.img2}
						alt=""
						className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
						width="144"
						height="144"
					/>
					<div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
						<h2 className="text-lg font-semibold text-black mb-0.5">{cartItem.item.title}</h2>
						<dl className="flex flex-wrap text-sm font-medium whitespace-pre">
							<div>
								<dt className="sr-only">Description</dt>
								<dd> · {cartItem.item.description2}</dd>
							</div>
							<div className="flex-none w-full mt-0.5 font-normal">
								<dt className="inline">By</dt>{" "}
								<dd className="inline text-black">{cartItem.item.marca}</dd>
							</div>
							<div className="flex-none w-full mt-0.5 font-normal">
								<dt className="inline">Unidades</dt>{" "}
								<dd className="inline text-black">{cartItem.quantity} </dd>
							</div>
							<div className="flex-none w-full mt-0.5 font-normal">
								<dt className="inline">u$d</dt>{" "}
								<dd className="inline text-black">{cartItem.item.price} c/u</dd>
							</div>
							<div class="hover:bg-blueGray-400 items-center px-4 rounded-full text-base" onClick={handlerRemoveItem}>
								<dt className="text-red-700">
									<button> Quitar </button>
									<i class="far fa-trash-alt" >
										{" "}
									</i>
								</dt>
							</div>
						</dl>
					</div>
				</article>
			</ul>
		</>
	);
};

export default CartItems;
