import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL, window.location.origin).pathname : "/"}>
    <App />
  </BrowserRouter>
);

