import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// IMPORTO MI CSS GENERAL PARA TODAS LAS PESTAÑAS 
import "./styles/StylesGenerals.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// CONFIGURACION DE LAS RUTAS
<BrowserRouter>
    <App />
</BrowserRouter>   
);

