import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; 
import AdminProvider from "./context/AdminProvider.jsx";  // Correct path



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  </StrictMode>
);
