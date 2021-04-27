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
    const filtrado = categoryId ? itemsCollection.where("category", "==", categoryId ): itemsCollection;
    const prom = filtrado.get();

    prom.then((snaptshot) => {
			if (snaptshot.size > 0) {
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
            <ItemList items={items}/>
        </>
    );
}
