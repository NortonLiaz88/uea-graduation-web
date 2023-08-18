import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
