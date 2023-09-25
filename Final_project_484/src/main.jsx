import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ExcalidrawEmbed from './ExcalidrawEmbedded.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExcalidrawEmbed />
  </React.StrictMode>,
)
