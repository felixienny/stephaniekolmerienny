import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/droit" element={<App job="droit" />} />
        <Route path="/mediation" element={<App job="mediation" />} />
        <Route path="*" element={<Navigate replace to={'/droit'} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
