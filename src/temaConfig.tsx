//aqui van las configuraciones del tema principal
import React from "react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main:'#333'
  },
  secondary: {
    main: 'rgba(188, 92, 76, 1)'
  }
}
})

export default theme;