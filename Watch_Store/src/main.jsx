import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContext from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContext.Provider>
          <App />
    </ShopContext.Provider>

  </React.StrictMode>
)
