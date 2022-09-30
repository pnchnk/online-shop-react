import React from "react";
import { useState } from "react";
import MyContext from "./MyContext";

function MyProvider({ children }) {

    const [products, setProducts] = useState()

    const getProducts = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/`);
            const data = await res.json();     
            setProducts(data.products);
        } catch (err) {
            throw new Error(err);
        }
    };

    return <MyContext.Provider value={{products, getProducts}}>{children}</MyContext.Provider>;
}

export default MyProvider;
