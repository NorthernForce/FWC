import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NT4Provider } from '@frc-web-components/react';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <NT4Provider address="10.1.72.2">
      <App />
    </NT4Provider>
  </React.StrictMode>
)