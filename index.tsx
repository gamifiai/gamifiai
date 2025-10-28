import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("index.tsx script executed.");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Fatal Error: Could not find the root element in index.html. The React app cannot be mounted.");
  throw new Error("Could not find root element to mount to");
}

console.log("Root element found. Rendering React app...");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);