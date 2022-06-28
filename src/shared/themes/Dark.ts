import { createTheme } from '@mui/material';
import { ptBR } from '@mui/x-data-grid';


const DarkMode = createTheme({
  palette: {
    primary :{
      main: '#b31c14',
      contrastText: '#fff'

    },
    background: {
      default: '#202124',
      paper: '#303134'
    },
  },
  typography:{
    allVariants: {
      color: '#fff'
    }
  }
},ptBR);

export default DarkMode;