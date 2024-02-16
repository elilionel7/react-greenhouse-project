
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ClimateProvider } from './context/ClimateContext'; // Import ClimateProvider
import ThemeProvider from './context/ThemeContext'; // Assuming you're also using ThemeContext

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ClimateProvider> {/* Wrap App with ClimateProvider */}
        <App />
      </ClimateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
