import React, {useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import Header from '../components/header/Header'
import Card from '../components/card/Card';
import MyContext from '../context/MyContext';
import Footer from '../components/footer/Footer';

function Main() {
  const {products, getProducts} = useContext(MyContext);

  useEffect(()=> {
    getProducts();
  },[])

  return (
    <>
        <Header/>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
               products?.map(item => {
                  return(
                    <Card id={item.id} key={item.id} thumbnail={item.thumbnail} price={item.price} title={item.title} product={item}/>
                  )              
               })
            }
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Main