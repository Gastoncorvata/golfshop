import React from "react";
import { Link } from "react-router-dom";


const EmptyCart = () => {
	return (
		<>
			<div className="justify-center mt-24 text-indigo-300">
				<h2 className="text-4xl text-center text-teal-500">
					Your Golf`s Cart <i className="fas fa-shopping-cart"> </i> is empty.
				</h2>
				<p className="text-2xl text-teal-500 text-center">
					Buy everything in{" "}
					<div>
						<Link to={`/`}>
							<i className="fa-golf-ball fas hover:bg-amber-500 hover:text-white m-3 p-3 rounded-full text-5xl text-amber-500">
								Golf Shop
							</i>
						</Link>
					</div>
				</p>
			</div>
		</>
	);
};

export default EmptyCart;
