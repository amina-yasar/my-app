import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
