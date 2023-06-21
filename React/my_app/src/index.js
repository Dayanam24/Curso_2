// Importamos react
import React from 'react';

// Importamos las librerias fundamentales
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Importamos los elementos necesarios y componentes
import './index.css';
import Navbar from './components/Navbar';
import ApiAxiosMap from './Hooks/ApiAxiosMap';
import ApiAxiosKey from './Hooks/ApiAxiosKey';


// Importamos las vistas a renderizar
import App from './App';
import Home from './views/Home';
import Carrito from './views/Carrito';
import ApiAxiosView from './views/ApiAxiosView';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/login" element={<App />} />
      <Route path="/register" element={<App />} />
      <Route path="/ApiAxios" element={<ApiAxiosView />} />
      <Route path="/ApiAxiosMap" element={<ApiAxiosMap />} />
      <Route path="/ApiAxiosKey" element={<ApiAxiosKey />} />
    </Routes>
  </BrowserRouter>
);