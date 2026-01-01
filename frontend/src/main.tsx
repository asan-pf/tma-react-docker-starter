import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {init} from './init.ts'

init({ debug: true, eruda: false, mockForMacOS: true })
  .catch((e) => console.warn("TMA init failed:", e));


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
