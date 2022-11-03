import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Screens/Home/Router.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/Home/NavBar/NavBar.css";
import "./Components/Home/CartWidget/CartWidget.css";
import "./Components/Home/ItemListContainer/ItemListContainer.css";
import "./Components/Home/Item/Item.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
