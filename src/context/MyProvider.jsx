import React, { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import MyContext from "./MyContext";

function MyProvider({ children }) {

    const [products, setProducts] = useState() // all products

    const [cart, setCart] = useState([]) // shopping cart

    let [cartIds, setCartIds] = useState([]);

    const getProducts = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/`);
            const data = await res.json();    
            actualProducts(data.products) 
            // setProducts(data.products);
        } catch (err) {
            throw new Error(err);
        }
    };

    const actualProducts = async (items) => { // sorting and filtering
        const res = await items?.filter(el => el.category === 'smartphones' || el.category === 'laptops')?.sort((a, b) => b.rating - a.rating)
        setProducts(res);
    };

    

    return <MyContext.Provider value={{products, getProducts, cart,  setCart}}>{children}</MyContext.Provider>;
}

export default MyProvider;
