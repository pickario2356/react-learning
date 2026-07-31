import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// createRoot(...render()) sai wo componenet react ka root bn jata hai
// .render(App()) sai jo chiz hmne root bnai usme app wala chiz aaye

