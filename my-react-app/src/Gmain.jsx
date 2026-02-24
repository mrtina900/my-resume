import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/Gindex.css'
import App from './page/GApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
