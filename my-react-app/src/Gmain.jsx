import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Gindex.css'
import App from './GApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
