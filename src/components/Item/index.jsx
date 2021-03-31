import React from "react"
import { Link } from "react-router-dom";


export const Item= ({ item }) => {

    return(
        <div className="gap-5 grid grid-cols-1 lg:grid-cols-3 m-14 md:grid-cols-3 p-10 sm:grid-cols-1 w-1/2 xl:grid-cols-3">
            <Link to={`/item/${item.id}`} className="inline-flex hover:bg-emerald-500 hover:opacity-75 "> 
                <div className="shadow-lg ">
                    <img className="w-full " src={item.img2} alt="Item img" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2" >{item.title}</div>
                    <p className="text-gray-700 text-base">
                        {item.description2}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">u$d{item.price}</span>
                </div>
            </div>
            </Link>
        </div>
    );
}