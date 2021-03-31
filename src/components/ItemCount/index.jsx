import React, {useState} from "react";
import { Link } from 'react-router-dom';

export function ItemCount ({stock, inicio, onAdd}){
    const [count, setCount] = useState (inicio);

    const sumar = () => {
        setCount (count +1);
    };

    const restar = () => {
        setCount (count -1);
    };

    return (
        <div className="flex flex-col items-center justify-center ">
        <div className="m-2 flex items-center justify-center border rounded p-1 h-40">
            <button 
            disabled={count <= 0}
            onClick={restar}
            className="text-red-500 bg-transparent  hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
            type="button" 
            style={{ transition: "all .15s ease" }}>
                <i className="far fa-minus-square"></i> 
            </button>

            <div className= "m-5 px-8 font-black ">{count}</div>

            <button 
            disabled={count >= stock}
            onClick={sumar}
            className="text-green-500 bg-transparent  hover:bg-emerald-500 hover:text-white active:bg-green-600 font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
            type="button" 
            style={{ transition: "all .15s ease" }}>
                <i className="far fa-plus-square"></i>
            </button>
        </div>
            <div className="flex space-x-3 mb-3 text-sm font-semibold uppercase">
                <div className="flex-auto flex space-x-3">
                <Link to="/">
                    <button className="border border-gray-200 flex h-10 items-center justify-center p-1 rounded w-auto" type="submit">Home</button>
                </Link>
                <Link to="/cart">
                    <button 
                    disabled={count >= 1}
                    onClick= { ()=> onAdd( count )}  
                    className="w-1/2 flex items-center justify-center border border-gray-200 bg-green-500 text-white hover:shadow-lg mx-4 rounded" type="button">Add to Cart</button></Link>
                </div>
                <button className="flex-none flex items-center justify-centerw-12 w-12 text-emerald-500 text-2xl p-1 " type="button" aria-label="like">
                    <a href="https://wa.me/?text=Mira%20Oferton!%20https://www.golfshop.com/itemcompartido" target="_blank" rel="noreferrer">
                    <i class="far fa-share-square"></i>
                    </a>
                </button>
                </div>
        </div>
    );
}

export default ItemCount;