import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import { ProductContextProvider } from './context/ProductContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContextProvider >
    <AppRouter />
  </ProductContextProvider>
);
