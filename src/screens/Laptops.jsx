import React from 'react'
import { useEffect, useState, useContext } from 'react';
import Header from '../components/header/Header';
import MyContext from '../context/MyContext';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';

function Laptops() {
    const {products, getProducts} = useContext(MyContext);

    const [laptops, setLaptops] = useState();

    const filterLaptops = () => {
       let temp = products?.filter(el => el.category === 'laptops');
       setLaptops(temp);
    }

    useEffect(()=> {
        getProducts();
        filterLaptops();
      },[])

  return (
    <>
        <Header/>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
               laptops?.map(item => {
                  return(
                    <Card id={item.id} key={`laptops${item.id}`} thumbnail={item.thumbnail} price={item.price} title={item.title} product={item}/>
                  )              
               })
            }
          </div>
        </div>
        <Footer/>
    </>
    
  )
}

export default Laptops