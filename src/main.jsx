import ReactDOM from 'react-dom/client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Details } from "./pages/Details"
import theme from './pages/styles/theme'
import GlobalStyle from './pages/styles/global'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </React.StrictMode>
)
