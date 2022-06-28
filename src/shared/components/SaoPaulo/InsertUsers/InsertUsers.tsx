import { useState } from 'react';
import { Box, TextField, Paper, Button, Snackbar, Alert } from '@mui/material';
import UsersSPServices from '../../../services/sao_paulo/users/UsersSPServices';

interface IUser {
  name: string;
  departament: string;
}

const InsertUsers = () => {

  const [name, setName] = useState('');
  const [departament, setDepartament] = useState('');
  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      UsersSPServices.create({ name, departament });
      setName('');
      setDepartament('');
      setOpenSucess(true);
    } catch (error) {
      console.log(error);
      setOpenError(true);
    }

  };


  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height={600}
    >
      <Box
        paddingX={9}
        paddingY={5}
        width='50%'
        component={Paper}
      >
        <form onSubmit={handleSubmit}>
          <Box
            display='flex'
            flexDirection='column'
          >
            <TextField
              required
              label="Nome"
              margin="normal"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              required
              label="Departamento"
              margin="normal"
              value={departament}
              onChange={e => setDepartament(e.target.value)}
            />
          </Box>
          <Box
            width='100%'
            display='flex'
            justifyContent='flex-end'
            marginTop={2}
          >
            <Button
              variant="contained"
              type='submit'
            >
              Salvar
            </Button>
          </Box>
        </form>

        <Snackbar
          open={openSucess}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity='success' color='success' variant='filled' >Notebook cadastrado com sucesso!</Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity='error' color='error' variant='filled' >Erro ao cadastrar notebook!</Alert>
        </Snackbar>

      </Box>
    </Box>

  );
};


export default InsertUsers;