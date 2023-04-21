import ReactDOM from 'react-dom/client'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './pages/styles/global'
import { Profile } from "./pages/Profile"
import theme from './pages/styles/theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
)
