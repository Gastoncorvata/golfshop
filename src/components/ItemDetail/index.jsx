import React from 'react';
import {ItemCount} from "../ItemCount";
import {SlideShow} from "../SlideShow";

export default function ItemDetail({ item }) {

    return (
        <div className="grid w-full justify-items-center mt-24">
        <div className="flex p-1 w-1/2">
            <div className="flex-none w-1/2 relative">
                <SlideShow className="absolute inset-0 w-full object-cover" />
            </div>
            <form className="flex-auto py-7 px-8">
                <div className="flex flex-wrap items-baseline">
                <h1 className="w-full flex-none text-3xl text-black mb-1.5">
                    {item?.title}
                </h1>
                <div className="text-lg leading-6 text-black">
                    ${item?.price}
                </div>
                <div className="text-sm text-gray-500 ml-3">
                    {item?.stock} In stock Now
                </div>
                </div>
                <div className="flex items-baseline mt-9 py-4 border-t border-gray-100">
                <div className="space-x-2 flex text-sm font-light text-black">
                    
                </div>
                <div className="ml-auto text-sm font-light text-gray-500">{item?.description}</div>
                </div>

                <ItemCount stock={item.stock} inicio={1} onAdd={} />

                <p className="text-sm text-gray-500">
                Free shipping on all Argentine orders.
                </p>
            </form>
            </div>
        </div>
        
    );
}