import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { MusicProvider } from './context/MusicContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <MusicProvider>
      <App />
      </MusicProvider>
    </Router>
  </StrictMode>
)
