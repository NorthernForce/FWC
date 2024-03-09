import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NT4Provider } from '@frc-web-components/react';

let ip = new URLSearchParams(window.location.search).get("ip") || "10.1.72.2"

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <NT4Provider address={ip}>
      <App />
    </NT4Provider>
  </React.StrictMode>
)