import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';  // Asegúrate de que App esté correctamente importado
import './index.css';  // Si tienes un archivo CSS global

// Se crea el contenedor del root de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Renderizamos la aplicación con Router (si estás usando rutas)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
