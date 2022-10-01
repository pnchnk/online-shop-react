import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './screens/Main';
import Product from './screens/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
