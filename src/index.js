import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { Details } from './pages/details'
import  {CharacterProvider}  from './context/characterContext'
import './index.css';
import { Favorites } from './pages/favorites/favorites';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CharacterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App />} />
          <Route path="detalle/:id" element={<Details />} />
          <Route path="/favorites" element={ <Favorites />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>
  </React.StrictMode>
);

