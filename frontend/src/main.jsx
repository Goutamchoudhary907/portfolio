import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '../src/components/common/ThemeProviders.jsx'
import { Toaster } from '../src/components/ui/sonner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
)