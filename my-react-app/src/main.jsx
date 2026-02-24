import React from 'react'
import ReactDOM from 'react-dom/client'
import ResumePage from './page/ResumePage' // This links to your new side-by-side page
import './styles/global.css'             // This links to your new styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResumePage />
  </React.StrictMode>,
)