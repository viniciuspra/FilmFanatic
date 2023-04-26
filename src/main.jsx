import ReactDOM from 'react-dom/client'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Home } from "./pages/Home"

import GlobalStyle from './pages/styles/global'
import theme from './pages/styles/theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)
