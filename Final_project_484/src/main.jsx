import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LocalSVG from './ExcalidrawSVG.jsx'
import LocalImage from './ExcalidrawPNG.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalImage />
  </React.StrictMode>,
)
