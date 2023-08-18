import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react"
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
