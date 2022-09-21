//aqui van las configuraciones del tema principal

import { createMuiTheme} from "@mui/material";

const theme = createMuiTheme({
    palette :{
      primary:{
        main:  'rgba(188, 92, 76, 1)'
      },
      secondary: {
        main: '#333'
      }
    },
    typography: {
      fontFamily: 'sans-serif'
    }

})


export default theme;