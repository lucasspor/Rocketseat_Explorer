import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.js'
import { ThemeProvider } from 'styled-components'

import { MyContext } from './myContext'

import { Routes } from './routes'

import theme from './styles/theme.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </StrictMode>
)
