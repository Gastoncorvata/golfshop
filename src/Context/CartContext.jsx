import React, { useState, useEffect } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ defaultValue = [], children }) => {
	const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));

	const [cart, setCart] = useState(
		cartLocalStorage && cartLocalStorage.length > 0 ? cartLocalStorage : defaultValue
	);


	const [totalPrecio, setTotalPrecio] = useState(0);
    let precio= cart.reduce((acumulador,itemActual)=>{
            const p = itemActual.quantity * itemActual.item.price
            return acumulador + p //120
        },0)[cart];

        setTotalPrecio(precio);

	cart.totalPrice =
		cart.length > 0
			? cart.reduce((total, cartItem) => total + cartItem.quantity * cartItem.item.price, 0)
			: "";
	cart.totalItems =
		cart.length > 0
			? cart.reduce((totalItemsCart, cartItem) => totalItemsCart + cartItem.quantity, 0)
			: "";

	const addItem = (item, quantity) => {
		if (!isInCart(item.id)) {
			const newCart = [...cart, { item: item, quantity: quantity }];
			setCart(newCart);
		} else {
			setCart(
				cart.map((cartItem) => {
					if (cartItem.item.id === item.id) {
						return { ...cartItem, quantity:cartItem.quantity + quantity };
					} else {
						return cartItem;
					}
				})
			);
		}
	};

	const isInCart = (id) => {
		return cart.findIndex((cartItem) => cartItem.item.id === id) >= 0 ? true : false;
	};

	const removeItem = (itemId) => {
		setCart(cart.filter((itemRemoved) => itemRemoved.item.id !== itemId));
	};

	const clear = () => {
		setCart([]);
		localStorage.setItem("cart", JSON.stringify([]));
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, totalPrecio, addItem, removeItem, clear, isInCart }}>
			{children}
		</CartContext.Provider>
	);
};
