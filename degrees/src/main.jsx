import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { DegreeProvider } from './context/DegreesContext.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <DegreeProvider>
        <App />
    </DegreeProvider>

  </StrictMode>,
)
