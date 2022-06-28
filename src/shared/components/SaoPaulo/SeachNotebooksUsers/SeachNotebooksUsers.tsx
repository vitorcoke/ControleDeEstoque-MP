import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Snackbar, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NotebooksSPService from '../../../services/sao_paulo/notebooks/NotebooksSPServices';
import UsersSPServices from '../../../services/sao_paulo/users/UsersSPServices';



interface INotebooksGet {
  id?: number;
  data: string;
  marca: string;
  modelo: string;
  userSPId: number;
}

interface IUsersNotebooks {
  id: number;
  name: string;
  departament: string;
  notebooks: INotebooksGet[];
}

interface IUser {
  name: string;
  departament: string;
}

const SeachNotebooksUsers = () => {


  const location = useLocation();
  const idUrl = location.pathname.match(/\d+/g);
  const [notebooks, setNotebooks] = useState<INotebooksGet>({ data: '', marca: '', modelo: '', userSPId: 0 });
  const [users, setUsers] = useState<IUsersNotebooks[]>([]);
  const [user, setUser] = useState<IUser[]>([]);
  const [userSelection, setUserSelection] = useState('');
  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    NotebooksSPService.getById(Number(idUrl))
      .then(res => setNotebooks(res));

    UsersSPServices.getAll()
      .then(res => setUsers(res));

  }, []);


  useEffect(() => {
    UsersSPServices.getById(Number(notebooks.userSPId))
      .then(res => setUser(res));
  }, [notebooks]);

  const handleClickDelete = () => {
    try{
      NotebooksSPService.update(Number(idUrl), { userSPId: null });
      setOpenSucess(true);
      setTimeout(() => setOpenSucess(false), 3000);
      setTimeout(() => navigate('/pagina-inicial'), 800);
    }catch(error){
      setOpenError(true);
      setTimeout(() => setOpenError(false), 3000);
    }
   
  };

  const handleClickReturn = () => {
    navigate('/notebooks');
  };

  const handleClickUpdate = () => {
    try {
      NotebooksSPService.update(Number(idUrl), { userSPId: Number(userSelection) });
      setOpenSucess(true);
      setTimeout(() => setOpenSucess(false), 3000);
      setTimeout(() => navigate('/pagina-inicial'), 800);  
    } catch (error) {
      setOpenError(true);
      setTimeout(() => setOpenError(false), 3000);
    }
  };

  const handleChange = (event: SelectChangeEvent) => setUserSelection(event.target.value);


  return (
    <Box
      display='flex'
      justifyContent='center'
    >
      <Box component={Paper} paddingX={9} paddingY={7} width='60%'>
        <Box
          display='flex'
          width='100%'
          justifyContent='center'
          marginBottom={5}
        >
          <Typography variant='h5'>{notebooks.marca}-{notebooks.modelo}  {notebooks.data}</Typography>
        </Box>
        {notebooks.userSPId > 0 ? (
          <Box
            display='flex'
            width='100%'
            justifyContent='center'
            flexDirection='column'

          >
            <Box
              display='flex'
              flexDirection='column'
              width='100%'
              height={200}
              justifyContent='center'
              alignItems='center'
              gap={2}
            >
              <Typography variant='h4'>Usuário cadastrado</Typography>
              <Typography variant='h5'>Nome : {user.length > 0 ? user.map(res => res.name.toUpperCase()) : undefined}</Typography>
              <Typography variant='h5'>Departamento : {user.length > 0 ? user.map(res => res.departament.toUpperCase()) : undefined}</Typography>
            </Box>
            <Box display='flex' justifyContent='end' width='100%' marginTop={3} gap={1}>
              <Button variant='contained' onClick={handleClickDelete}>Excluir</Button>
              <Button variant='contained' onClick={handleClickReturn}>Voltar</Button>
            </Box>
          </Box>
        ) : (
          <Box
            display='flex'
            width='100%'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            gap={7}
          >
            <Typography variant='h5'>Nenhum usuário cadastrado, cadastre agora</Typography>
            <form>
              <FormControl sx={{ width: 500 }}>
                <InputLabel>Usuário</InputLabel>
                <Select
                  label='Usuário'
                  value={userSelection}
                  onChange={handleChange}
                >
                  {users.map(user => (
                    <MenuItem key={user.id} value={user.id}><Typography>{user.name}   /   {user.departament}</Typography></MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
            <Box display='flex' justifyContent='end' width='100%' marginTop={3} gap={1}>
              <Button onClick={handleClickUpdate} variant='contained'>Salvar</Button>
            </Box>
          </Box>

        )}

      </Box>
      <Snackbar
        open={openSucess}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity='success' color='success' variant='filled' >Operação efetuada com sucesso!</Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity='error' color='error' variant='filled' >Erro ao efetuar a ação!</Alert>
      </Snackbar>
    </Box>
  );
};

export default SeachNotebooksUsers;