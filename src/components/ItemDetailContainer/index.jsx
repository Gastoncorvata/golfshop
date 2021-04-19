import React, {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/";

const getItems = (id) => {

	const db = getFirestore();
	const itemsCollection = db.collection("items");

	const item = itemsCollection.doc(id);
	return item.get();
};

export default function ItemDetailContainer() {
	const [ item, setItem ] = useState(null);
	const { itemId } = useParams();

	useEffect(() => {
		getItems(itemId).then((resultado) => {
			if (resultado.exists) {
				setItem(resultado.data());
			}
		});
		return;}, [itemId]);
	return (
        <>
            <h2 className="text-2xl text-center text-amber-500">Vas a comprar <span className="font-light italic text-teal-500"> {item.title} {item.marca} </span> por una cantidad de : </h2>
            <ItemDetail item={item} />
        </>
	);
}