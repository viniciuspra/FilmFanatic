import * as React from "react"
import Rating from "@mui/material/Rating"
import theme from "./theme"
import Box from "@mui/material/Box"

import { ThemeProvider } from "@mui/material/styles"

export default function Star() {
  const [value, setValue] = React.useState(4)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </ThemeProvider>
  )
}
