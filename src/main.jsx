import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


ReactDOM.createRoot(document.getElementById('index')).render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
)
