import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom"; 
import  products  from '../../Products.js';

export default function ItemListContainer() {
const [items, setItems] = useState([])

const {categoryId} = useParams()


useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (categoryId) {
            const productsFilter = products.filter((product) => {
                return product.category.toString() === categoryId;
            });
            resolve(productsFilter);
        } else resolve(products);
        resolve(products);
        }, 2000);
    });
    promesa.then((resultado) => {
        setItems(resultado);
    });
});


    return (

        <fragment className="container ">
            <ItemList items={items}/>
        </fragment>
    );
}
