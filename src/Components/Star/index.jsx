import * as React from "react"
import { ThemeProvider } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import theme from "./theme"

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
