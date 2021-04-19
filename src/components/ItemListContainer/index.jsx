import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

export default function ItemListContainer() {
const [items, setItems] = useState([]);
const {categoryId} = useParams();

useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    const filtrado = itemsCollection.where("category", "==", "categoryId" );
    const prom = filtrado.get();

    prom.then((snaptshot) => {
			console.log("se consultaron los datos");
			console.log(snaptshot);

			if (snaptshot.size > 0) {
				console.log(snaptshot.docs.map((doc) => doc.data()));

				console.log(snaptshot.docs.map((doc) => doc.id));

				setItems(
					snaptshot.docs.map((doc) => {
						return { id: doc.id, ...doc.data() };
					})
				);
			}
		});
    },[categoryId]);

    return (
        <>
        {categoryId}
            <ItemList items={items}/>
        </>
    );
}
