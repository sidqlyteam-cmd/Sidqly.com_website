import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './firebase'

if (
  window.location.hostname !== 'localhost' &&
  window.location.hostname !== '127.0.0.1'
) {
  if (window.location.hostname !== 'www.sidqly.com' || window.location.protocol !== 'https:') {
    window.location.replace(`https://www.sidqly.com${window.location.pathname}${window.location.search}${window.location.hash}`);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
