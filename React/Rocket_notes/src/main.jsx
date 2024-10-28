import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.js'
import { ThemeProvider } from 'styled-components'

import Details from './pages/Details'
import Home from './pages/Home'
import { Signing } from './pages/SignIng'
import { Signup } from './pages/Signup'
import { Profile } from './pages/Profile'
import { New } from './pages/New'

import theme from './styles/theme.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Details /> */}
      {/* <Home/> */}
      {/* <Signing/> */}
      {/* <Signup/> */}
      {/* <Profile /> */}
      <New/>
    </ThemeProvider>
  </StrictMode>
)
