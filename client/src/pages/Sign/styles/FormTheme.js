import { createTheme } from "@mui/material";

export const formTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    "@media (max-width:600px)": {
      h1: {
        fontSize: "30px",
      },
      h2: {
        fontWeight: 500,
        fontSize: "16px",
      },
    },
  },
});
