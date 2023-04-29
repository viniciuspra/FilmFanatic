import ReactDOM from 'react-dom/client'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import { New } from "./pages/New"

import GlobalStyle from './pages/styles/global'
import theme from './pages/styles/theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <New />
    </ThemeProvider>
  </React.StrictMode>
)
