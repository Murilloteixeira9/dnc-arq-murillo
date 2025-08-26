import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { AppProvider } from './contexts/AppContext.jsx'
import Footer from './componentes/Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
