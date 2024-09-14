import {Container, createRoot} from 'react-dom/client';
import React from 'react';
import {App} from './App';

const root = createRoot(document.getElementById('root') as Container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
