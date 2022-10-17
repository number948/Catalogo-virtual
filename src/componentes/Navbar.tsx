import React from 'react'
import imagen_bomberos from '../imagenes/logo-bomberos.png'
import imagen_fundacion from '../imagenes/logo-fundación.png'
import { Box } from '@mui/material'
import { AppBar,makeStyles, Toolbar, Typography } from '@material-ui/core';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import theme from '../temaConfig';

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(188, 92, 76, 1)',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(6),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))


const useStyles = makeStyles(theme =>({
   title:{
    flexGrow: 1,
    whiteSpace: 'pre-line',
    marginLeft: theme.spacing(6),
    fontFamily: 'helvatica'
   }
  }
    )
      )

const Navbar = () => {
  const classes = useStyles()
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation = {0} >
        <Toolbar>
        <img
            src={imagen_bomberos}  
            alt = 'imagen_logo_bomberos'>
          </img>
          <img
            src={imagen_fundacion}  
            alt = 'imagen_logo_fundacion'>
          </img>
          <Typography
            variant="h5"
            component='h3'
            className={classes.title}
            >
            Fundación Cultural y Deportiva de Bomberos De Chile {"\n"} 
             Museo Virtual
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}/>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;