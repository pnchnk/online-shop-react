import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import MyProvider from './context/MyProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <MyProvider>
      <Router>
        <App />
      </Router>
    </MyProvider>
    </Provider>
  </React.StrictMode>
);


