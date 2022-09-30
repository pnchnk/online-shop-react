import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import MyProvider from './context/MyProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyProvider>
      <Router>
        <App />
      </Router>
    </MyProvider>
  </React.StrictMode>
);


