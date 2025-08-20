import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const queryParams = new URLSearchParams(window.location.search);
const rawJob = queryParams.get('job');

const job = rawJob === 'droit' || rawJob === 'mediation' ? rawJob : 'droit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App job={job} />
  </React.StrictMode>
);
