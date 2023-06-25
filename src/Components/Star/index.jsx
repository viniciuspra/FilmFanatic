import * as React from "react"
import Rating from "@mui/material/Rating"
import theme from "./theme"
import Box from "@mui/material/Box"

import { ThemeProvider } from "@mui/material/styles"

export default function Star(props) {
  const [value, setValue] = React.useState(props.value || 0)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating name="read-only" value={value} readOnly size="large"/>
      </Box>
    </ThemeProvider>
  )
}
