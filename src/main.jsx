import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyProvider } from './Components/BodyFile/ClassContext';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
