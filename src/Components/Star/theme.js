import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  components: {
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#B4D42A",
        },
      },
    },
  },
})

export default theme
