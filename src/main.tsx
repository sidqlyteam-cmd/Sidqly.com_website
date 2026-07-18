import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './firebase'

if (
  window.location.hostname === 'sidqly.com' ||
  window.location.hostname === 'sidqly-prod.web.app' ||
  window.location.protocol === 'http:'
) {
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    window.location.replace(`https://www.sidqly.com${window.location.pathname}${window.location.search}${window.location.hash}`);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
