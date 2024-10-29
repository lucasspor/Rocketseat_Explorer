import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyle from './styles/global.js'

import { Routes } from './routes'
import { SignIng } from './pages/SignIng/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Routes/>
    </ThemeProvider>
  </StrictMode>,
)
