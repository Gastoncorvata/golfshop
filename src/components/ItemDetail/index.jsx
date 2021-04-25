import React, { useState, useContext } from 'react';
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";



export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const  { addItem }  = useContext(CartContext);

    const addHandler = (contador) => {
            //Agregar un Alert aca para notificar que se agrego un item

			addItem(item, contador);
			setCount(contador);
		};

    return (
    <>
        <h2 className="animate-pulse font-light italic text-2xl text-center text-teal-600">
            {" "}
            {count} Unidades
        </h2>
        <div className="grid w-full justify-items-center mt-24">
            <div className="flex p-1 w-1/2">
                <div className="flex-none w-1/2 relative">
                    <img
                        src={item?.img}
                        className="absolute inset-0 w-full object-cover"
                        alt="item imagen"
                    />
                </div>
                <form className="flex-auto py-7 px-8">
                    <div className="flex flex-wrap items-baseline">
                        <h1 className="w-full flex-none text-3xl text-black mb-1.5">{item?.title}</h1>
                        <div className="text-lg leading-6 text-black">$ {item?.price}</div>
                        <div className="text-sm text-gray-500 ml-3">{item?.stock} In stock Now</div>
                    </div>
                    <div className="flex items-baseline mt-9 py-4 border-t border-gray-100">
                        <div className="space-x-2 flex text-sm font-light text-black"></div>
                        <div className="ml-auto text-sm font-light text-gray-500">{item?.description}</div>
                    </div>

                    {count === 0 ? (
                        <ItemCount stock={item?.stock} initial={ 0 } onAdd={ addHandler } />
                    ) : (
                        <div>
                            <Link to="/">
                                <button
                                    className="bg-gray-700 border flex h-auto hover:bg-teal-500 items-center justify-center m-1 mx-4 rounded text-white w-10/12"
                                    type="button"
                                >
                                    {" "}
                                    Seguir Comprando{" "}
                                </button>
                            </Link>
                            <Link to="/cart">
                                <button
                                    className="active:bg-emerald-600 bg-blue-500 border border-gray-200 flex h-auto hover:bg-teal-500 items-center justify-center mx-4 rounded text-white w-10/12"
                                    type="button"
                                >
                                    {" "}
                                    Finalizar{" "}
                                </button>
                            </Link>
                        </div>
                    )}

                    <p className="text-sm text-gray-500">Free shipping on all orders.</p>
                </form>
            </div>
        </div>
    </>
);
}