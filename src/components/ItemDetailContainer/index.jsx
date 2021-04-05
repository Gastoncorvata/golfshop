import React, {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from "react-router-dom";
import products from "../../Products";


export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    
    const {itemId} = useParams()

    useEffect(() => {
    const promesa = new Promise((resolve) =>
    
    setTimeout(() => {

        resolve (products.find((product) => product.id === parseInt(itemId)));
    }, 2000)
    );
    promesa.then((product) => {
    setItem(product);
    });
    },[itemId]);

    return (
        <>
            <h2 className="text-2xl text-center text-amber-500">Vas a comprar <span className="font-light italic text-teal-500"> {item.title} {item.marca} </span> por una cantidad de : </h2>
            <ItemDetail item={item} />
        </>
    );
}