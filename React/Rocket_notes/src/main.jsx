import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Details from './pages/Details/index.jsx'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </StrictMode>,
)
