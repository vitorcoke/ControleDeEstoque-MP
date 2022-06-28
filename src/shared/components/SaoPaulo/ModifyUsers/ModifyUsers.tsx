import { useEffect, useState } from 'react';
import { Alert, Box, Button, Paper, Snackbar, TextField } from '@mui/material';
import UsersSPServices from '../../../services/sao_paulo/users/UsersSPServices';
import { UseDeleteContext } from '../../../contexts/DeleteContext';

interface IUserGet {
  name: string;
  departament: string;
}


const ModifyUsers = () => {

  const [user, setUser] = useState<IUserGet>({ name: '', departament: '' });
  const { checkbox } = UseDeleteContext();
  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);


  useEffect(() => {
    UsersSPServices.getById(Number(checkbox))
      .then(res => res.map((user: IUserGet) => setUser(user)));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      UsersSPServices.update(Number(checkbox), { name: user.name, departament: user.departament });
      setOpenSucess(true);
      setTimeout(() => setOpenSucess(false), 3000);
    } catch (error) {
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
              value={user.name}
              onChange={e => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              required
              label="Departamento"
              margin="normal"
              value={user.departament}
              onChange={e => setUser({ ...user, departament: e.target.value })}
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

export default ModifyUsers;