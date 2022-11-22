import React from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Main from './screens/Main';
import Product from './screens/Product';
import Smartphones from './screens/Smartphones';
import Laptops from './screens/Laptops';
import Cart from './screens/Cart';

function App() {
  let navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Main/>} />
          <Route path=":id" element={<Product/>} />
        </Route>
        <Route path='/smartphones/'>
          <Route index element={<Smartphones/>} />
          <Route path=":id" element={<Product/>} />
        </Route>
        <Route path='/laptops/'>
          <Route index element={<Laptops/>} />
          <Route path=":id" element={<Product/>} />
        </Route>
        <Route path='/cart/'>
          <Route index element={<Cart/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
