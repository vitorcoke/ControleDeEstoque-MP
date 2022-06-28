import { createTheme } from '@mui/material';
import { ptBR } from '@mui/x-data-grid';



const LightMode = createTheme({
  palette:{
    primary :{
      main: '#b31c14',
    },
    background: {
      default:'#f7f8f3',
      paper: '#fff'
    },
    success :{
      main: '#30C207',
    }
  }
},ptBR);

export default LightMode;